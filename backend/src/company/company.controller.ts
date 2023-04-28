import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { Company } from './company.entity';
import { CompanyService } from './company.service';


@Controller('company')
export class CompanyController {

    constructor(private companysService: CompanyService) {}

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth')
    @Get()
    @ApiOperation({ summary: 'Show all companies saved' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    findAll() {
        return this.companysService.findAll();
    }
    
    /*
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth') 
    @Get(':id')
    @ApiOperation({ summary: 'Get a specific company by id' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    findOne(@Param('id', ParseIntPipe) id : number) {
        //return this.companysService.findOne(id);
    } */
    
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth') 
    @Post() 
    @ApiOperation({ summary: 'Add a new company' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    createRecord(@Body() company: Company): Promise<Company> {
        return this.companysService.createRecord(company);
    }
/*
  

  

  @Patch(':id')
  async editNote(@Body() note: Note, @Param('id') id: number): Promise<Note> {
    const noteEdited = await this.notesService.editNote(id, note);
    return noteEdited;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    this.notesService.remove(id);
  } */
}
