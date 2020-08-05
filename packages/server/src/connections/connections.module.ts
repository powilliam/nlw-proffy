import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionsService } from './connections.service';
import { Connection } from './connections.entity';
import { ConnectionsController } from './connections.controller';
import { TeachersModule } from '../teachers/teachers.module';

@Module({
  imports: [TypeOrmModule.forFeature([Connection]), TeachersModule],
  providers: [ConnectionsService],
  controllers: [ConnectionsController],
})
export class ConnectionsModule {}
