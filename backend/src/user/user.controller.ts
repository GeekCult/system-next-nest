import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { User } from './user.entity';
import { Person } from './person.entity';
import { UserService } from './user.service';


@Controller('user')
export class UserController {

    constructor(private usersService: UserService) {}

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth') 
    @Get()
    @ApiOperation({ summary: 'Shows all users' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    findAll() {
        return this.usersService.findAll();
    }
    
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth('JWT-auth') 
    @ApiOperation({ summary: 'Get an user information' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id : number) {
        return this.usersService.findOne(id);
    } 

    @Post() 
    @ApiOperation({ summary: 'Create a new user' })
    createRecord(@Body() user: User): Promise<User> {
        return this.usersService.createRecord(user);
    }

    @Put(':id')
    @ApiBearerAuth('JWT-auth') 
    @ApiOperation({ summary: 'Update an user information' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    editRecord(@Body() user: Person, @Param('id') id: number): Promise<Person> {
        const userEdited = this.usersService.editRecord(id, user);
        return userEdited;
    }

    @Delete(':id')
    @ApiBearerAuth('JWT-auth') 
    @ApiOperation({ summary: 'Delete an user' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    remove(@Param('id', ParseIntPipe) id: number) {
        this.usersService.removeRecord(id);
    }
}
