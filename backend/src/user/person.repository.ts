import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Person } from './person.entity';

@Injectable()
export class PersonRepository extends Repository<Person> {
    constructor(private dataSource: DataSource) {
    super(
        Person,
        dataSource.createEntityManager(),
        dataSource.createQueryRunner(),
      );
    }
    
    async findAll() {
      return this.find({select: {id: true, firstName: true, lastName: true, email: true}});
    }

    async findById(id: number){
      return this.findOne({select: {id: true, firstName: true, lastName: true, email: true}, where: {id: id}});
    }

    async updateUser(id: number, user: Person) {
      const model = await this.findById(id);
      if (!model) {
        return {statusCode: 400, message: "User not found"}
        throw new NotFoundException('User not found');
      }

      let set = await this.dataSource
        .createQueryBuilder()
        .update(Person)
        .set({ firstName: user.firstName, lastName: user.lastName })
        .where("id = :id", { id: id })
        .execute()
        
      if(set){
        return {statusCode: 200, message: "User updated successfuly"}
      }else{
        return {statusCode: 500, message: "Error updating user"}
      }
     
    }
   
}