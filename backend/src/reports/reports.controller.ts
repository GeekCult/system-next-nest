import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { Reports } from './reports.entity';
import { ReportsService } from './reports.service';


@Controller('reports')
export class ReportsController {

    constructor(private reportsService: ReportsService) {}
    
    /*
    @Get()
    findAll() {
        return this.reportsService.findAll();
    } */
    
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth')
    @Get('summary') 
    @ApiOperation({ summary: 'Show summary of checkin and checkout vehicles by companies' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    summary(@Query() query: any){
        return this.reportsService.summary(query);
    }
    
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth')
    @Get('summary-by-period') 
    @ApiOperation({ summary: 'Show summary of checkin and checkout vehicles by period' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    summaryByPeriod(@Query() query: any){
        return this.reportsService.summaryByPeriod(query);
    }


}