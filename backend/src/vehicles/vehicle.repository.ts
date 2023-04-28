import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Vehicle } from './vehicle.entity';

@Injectable()
export class VehicleRepository extends Repository<Vehicle> {
    constructor(private dataSource: DataSource) {
    super(
        Vehicle,
        dataSource.createEntityManager(),
        dataSource.createQueryRunner(),
      );
    }
    
    async findAll() {
        //return this;
        return this.find();
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

  async updateCompany(id: string, updateCompanyDto: UpdateCompanyInput) {
    const model = await this.findById(id);
    if (!model) {
      throw new NotFoundException('Company not found');
    }

    const { social_name, fantasy_name, document, phone, is_active, address } =
      updateCompanyDto;

    const newPayload = {
      id,
      social_name,
      fantasy_name,
      document,
      phone,
      is_active,
      ...(address || {}),
    };

    await this.save(newPayload);
  }

  async deleteCompany(id: string): Promise<void> {
    const model = await this.findById(id);
    if (!model) {
      throw new NotFoundException('Company not found');
    }
    this.softDelete(id);
  } */
}