import { Controller, Get, Post, Param } from '@nestjs/common';
import { ConnectionsService } from './connections.service';
import { TeachersService } from '../teachers/teachers.service';

@Controller('connections')
export class ConnectionsController {
  constructor(
    private readonly connectionsService: ConnectionsService,
    private readonly teachersService: TeachersService,
  ) {}

  @Get()
  async getConnections() {
    return await this.connectionsService.get();
  }

  @Post(':teacherId')
  async createConnection(@Param('teacherId') teacherId: string) {
    return await this.connectionsService.create({
      teacher: await this.teachersService.findById(teacherId),
    });
  }
}
