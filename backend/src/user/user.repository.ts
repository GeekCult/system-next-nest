import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(private dataSource: DataSource) {
    super(
        User,
        dataSource.createEntityManager(),
        dataSource.createQueryRunner(),
      );
    }
    
    async findAll() {
      return this.find({select: {id: true, firstName: true, lastName: true, email: true, password: false}});
    }

    async findById(id: number){
      return this.findOne({select: {id: true, firstName: true, lastName: true, email: true, password: false, celphone: true}, where: {id: id}});
    }
    /* 
  async createCompany(createCompanyDto: CreateCompanyInput): Promise<void> {
    const {
      fantasy_name,
      email,
      password,
      document,
      phone,
      is_active,
      address,
    } = createCompanyDto;

    const companyExists = await this.findOneBy({ email });
    if (companyExists) {
      throw new UnprocessableEntityException('Company already registered');
    }

    const hashedPassword = await hash(password, 8);

    await this.save({
      id: uuidv4(),
      fantasy_name,
      email,
      password: hashedPassword,
      document,
      phone,
      is_active,
      ...(address && address.zipcode ? { address } : {}),
    });
  }

  

  async findById(id: string): Promise<Company> {
    return this.findOne({
      where: { id },
      relations: ['address'],
    });
  }

  async findByEmail(email: string): Promise<Company> {
    return this.findOne({
      where: { email },
      relations: ['address'],
    });
  }

  

  async deleteCompany(id: string): Promise<void> {
    const model = await this.findById(id);
    if (!model) {
      throw new NotFoundException('Company not found');
    }
    this.softDelete(id);
  } */
}