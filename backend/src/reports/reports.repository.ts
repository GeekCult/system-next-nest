import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Reports } from './reports.entity';
import { ReportFilterQuery } from './reports.service';

@Injectable()
export class ReportsRepository extends Repository<Reports> {
    constructor(private dataSource: DataSource) {
    super(
        Reports,
        dataSource.createEntityManager(),
        dataSource.createQueryRunner(),
      );
    }
    
    async summary(query: ReportFilterQuery) {
      
        const querySQL = this.prepareQuery(query);

        
        const recordset = await this.query(querySQL);

        /*
        var checkin = 0; var checkout = 0;
        var result: any = {}
        for (let key in recordset) {
            //let value = result[key].license_plate;
            //if(result[key].checkin != null) result[key].checkin = checkin + 1;
            if(recordset[key].checkin != null) checkin = checkin + 1;
            result[key] = {name: recordset[key].name, total: recordset[key].total, checkin: checkin}
        } */

        return recordset;
    } 

    async summaryByPeriod(query: ReportFilterQuery) {
        
        const querySQL = this.prepareQuery(query);
        const recordset = await this.query(querySQL);

        var checkin = 0; var checkout = 0;
        var result: any = {}

        if(recordset){
            for (let key in recordset) {

                const date = recordset[key].date.split(" ");
                const time = date[1].split(":")

                const querySQL2 = this.prepareQuery2(recordset[key].id, 'date_start', date[0], time[0]);
                const querySQL3 = this.prepareQuery2(recordset[key].id, 'date_end', date[0], time[0]);

                const checkin = await this.query(querySQL2);
                const checkout = await this.query(querySQL3);

                //return items
                //let value = result[key].license_plate;
                //if(result[key].checkin != null) result[key].checkin = checkin + 1;
                
                result[key] = {date: recordset[key].date, name: recordset[key].name, checkin: checkin[0].total, checkout: checkout[0].total}
            } 
        }

        return result;
    } 

    findAll() {
        return this.find();
    }
      
    prepareQuery(query: ReportFilterQuery) {

        const filter = query?.filter;

        let select = `SELECT company.name AS name, company.id AS id`;
        let from = `FROM parking LEFT JOIN company ON parking.id_company = company.id`;
        let groupBy = 'GROUP BY company.id';
        
        if (filter?.period) {
            select += `,CONCAT (DATE(parking.date_start), ' ', HOUR(parking.date_start), ':00') as date`;
            groupBy += `, date`;
        }

        if (filter?.period) { select += `, (SELECT COUNT(*) FROM parking WHERE id_company = company.id AND date_start IS NOT NULL) AS checkin, (SELECT COUNT(*) FROM parking WHERE id_company = company.id AND date_end IS NOT NULL) AS checkout`;}

        const querySQL = `${select} ${from} ${groupBy}`;

        return querySQL;
    }

    prepareQuery2(id: number, field: string, date: string, hour: string) {

        const querySQL = `SELECT COUNT(*) as total FROM parking WHERE (id_company = ${id} AND ${field} >= '${date} ${hour}:00:00' AND ${field} <= '${date} ${hour}:59:59')`;

        return querySQL;
    }
}