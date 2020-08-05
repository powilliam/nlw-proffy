import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Connection } from './connections.entity';
import { CreateConnectionDTO } from './dto/CreateConnectionDTO';

@Injectable()
export class ConnectionsService {
  constructor(
    @InjectRepository(Connection)
    private readonly connectionRepository: Repository<Connection>,
  ) {}

  async get(): Promise<{ total: number }> {
    return { total: await this.connectionRepository.count() };
  }

  async create(dto: CreateConnectionDTO): Promise<Connection> {
    const connection = this.connectionRepository.create(dto);
    await this.connectionRepository.save(connection);

    return connection;
  }
}
