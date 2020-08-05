import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly typeorm: TypeOrmHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  async check() {
    return await this.health.check([() => this.typeorm.pingCheck('database')]);
  }
}
