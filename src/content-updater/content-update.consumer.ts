import { InjectQueue, Process, Processor } from '@nestjs/bull';
import { Queue } from 'bull';
import { ContentCreatorService } from 'src/content-creator/content-creator.service';

@Processor('content-update')
export class ContentUpdateConsumer {
  constructor(
    @InjectQueue('content-update') private readonly queue: Queue,
    private contentCreatorService: ContentCreatorService,
  ) {}

  @Process('content-update-request')
  async updateContet() {
    const jobs = await this.queue.getWaiting();
    jobs.forEach((job) => job.remove());
  }
}
