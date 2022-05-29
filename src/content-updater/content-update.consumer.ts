import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('content-update')
export class ContentUpdateConsumer {
  @Process('content-update-request')
  updateContet(job: Job) {
    console.log('content update consumer test', job.data);
  }
}
