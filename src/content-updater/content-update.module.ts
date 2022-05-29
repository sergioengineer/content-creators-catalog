import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ContentUpdateConsumer } from './content-update.consumer';
import { ContentUpdateService } from './content-update.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'content-update',
    }),
  ],
  providers: [ContentUpdateConsumer, ContentUpdateService],
})
export class ContentUpdateModule {}
