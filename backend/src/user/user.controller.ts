import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
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
    
    /*
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id : number) {
        return this.usersService.findOne(id);
    } */
    
    /*
    @Post('search') 
    //@ApiOperation({ summary: 'Create cat' })
    //@ApiResponse({ status: 403, description: 'Forbidden.' })
    createSearch(@Body() person: Person): Promise<Person> {
        return this.usersService.createRecord(person);
    } */

    @Post() 
    @ApiOperation({ summary: 'Create a new user' })
    //@ApiResponse({ status: 403, description: 'Forbidden.' })
    createRecord(@Body() user: User): Promise<User> {
        return this.usersService.createRecord(user);
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
