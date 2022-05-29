import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
@Injectable()
export class ContentUpdaterServiceService {
  @Cron(CronExpression.EVERY_SECOND)
  updateContentCatalog() {
    console.log('test');
  }
}
