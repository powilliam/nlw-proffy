import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './health/health.module';
import { ClassesModule } from './classes/classes.module';
import { ConnectionsModule } from './connections/connections.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    HealthModule,
    ClassesModule,
    ConnectionsModule,
  ],
})
export class AppModule {}
