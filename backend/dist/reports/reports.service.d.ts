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
export declare class ReportsService {
    private reportsRepository;
    constructor(reportsRepository: ReportsRepository<Reports>);
    summary(query: ReportFilterQuery): Promise<Reports[]>;
    summaryByPeriod(query: ReportFilterQuery): Promise<Reports[]>;
    findAll(): Promise<Parking[]>;
    findOne(id?: number): Promise<Reports>;
    summaryOld(reports: Reports): Promise<any[]>;
}
