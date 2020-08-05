import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeachersService } from './teachers.service';
import { Teacher } from './teachers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher])],
  providers: [TeachersService],
  exports: [TypeOrmModule, TeachersService],
})
export class TeachersModule {}
