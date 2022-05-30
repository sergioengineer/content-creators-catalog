import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { CronExpression, Timeout } from '@nestjs/schedule';
import { Queue } from 'bull';

@Injectable()
export class ContentUpdateService {
  constructor(@InjectQueue('content-update') private readonly queue: Queue) {}

  @Timeout(500)
  async startUp() {
    console.log('startup');
    await this.queue.clean(0);
    this.queue.add(
      'content-update-request',
      {},
      {
        lifo: false,
        removeOnComplete: true,
        removeOnFail: true,
        repeat: {
          cron: CronExpression.EVERY_SECOND,
        },
      },
    );
  }
}
