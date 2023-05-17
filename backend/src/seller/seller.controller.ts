import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { Seller } from './seller.entity';
import { SellerService } from './seller.service';


@Controller('seller')
export class SellerController {

    constructor(private sellerService:SellerService) {}

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth') 
    @Get()
    @ApiOperation({ summary: 'Shows all seller' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    findAll() {
        return this.sellerService.findAll();
    }
    
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth') 
    @ApiOperation({ summary: 'Get an seller information' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id : number) {
        return this.sellerService.findOne(id);
    } 

    @Post() 
    @ApiOperation({ summary: 'Create a new seller' })
    createRecord(@Body() user: Seller): Promise<Seller> {
        return this.sellerService.createRecord(user);
    }

    @Put(':id')
    @ApiBearerAuth('JWT-auth') 
    @ApiOperation({ summary: 'Update an seller information' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    editRecord(@Body() user: Seller, @Param('id') id: number): Promise<Seller> {
        const userEdited = this.sellerService.editRecord(id, user);
        return userEdited;
    }

    @Delete(':id')
    @ApiBearerAuth('JWT-auth') 
    @ApiOperation({ summary: 'Delete an seller' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    remove(@Param('id', ParseIntPipe) id: number) {
        this.sellerService.removeRecord(id);
    }
}
