// @ts-nocheck
import { Injectable, Inject } from '@nestjs/common';
import { Reports } from './reports.entity';
import { ReportsRepository } from './reports.repository';
import { Parking } from './parking.entity';

export type ReportFilterQuery = {
  filter: {
    company_id: string;
    period: boolean;
    group: boolean;
  };
};

@Injectable()

export class ReportsService {

    constructor(
        private reportsRepository: ReportsRepository<Reports>,
    ){}
    
    async summary(query: ReportFilterQuery): Promise<Reports[]> {
        query.filter = {group: true, period: false }
        return this.reportsRepository.summary(query);
    }

    async summaryByPeriod(query: ReportFilterQuery): Promise<Reports[]> {
        query.filter = {period: true }
        return this.reportsRepository.summaryByPeriod(query);
    }

    async findAll(): Promise<Parking[]> {
        return this.reportsRepository.findAll();
    }

    async findOne(id: number = 1): Promise<Reports> {
        return this.reportsRepository.findOneBy({ id: id });
    }

    async summaryOld(reports: Reports){
        
        var result: any = {Mes: 'Maio'};
        var result2 = [];
        
        //const recordset = this.reportsRepository.find().then( items => items.map( (e) => { if(e.license_plate === 'string'){ return e; } }  )  );

        const recordset = await this.reportsRepository.find();
        //return recordset;
        if(recordset){
            
            result.dia  = 'Fevereiro';
            for (const contract of Object.keys(recordset)) {
                result.rola = 'Dezembro';
                //var it  +=  "d";
            }
            
            for (let key in recordset) {
                //result.areia = 'Agosto';
                let value = recordset[key].license_plate;
                if(value != 'string') result2.push(value);
            } 
            
            for(let i= 0; i < recordset.length; i++){
                result.caraio = 'Dezembro';
                //console.log(data.products[i].product_desc); //use i instead of 0
            }

          
            //result.push('Setembro');
            //Object.keys(recordset).map((d)=>{ result2.caraio = 'Dezembro';  } );
            

        }
        //result2.push('Junho');
        return result2;
    }

}

