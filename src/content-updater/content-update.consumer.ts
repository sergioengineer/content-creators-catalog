import { InjectQueue, Process, Processor } from '@nestjs/bull';
import { Queue } from 'bull';

@Processor('content-update')
export class ContentUpdateConsumer {
  constructor(@InjectQueue('content-update') private readonly queue: Queue) {}

  @Process('content-update-request')
  async updateContet() {
    console.log('consumer');
    const jobs = await this.queue.getWaiting();
    jobs.forEach((job) => job.remove());
  }
}
