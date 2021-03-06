import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ContentCreatorModule } from 'src/content-creator/content-creator.module';
import { ContentUpdateConsumer } from './content-update.consumer';
import { ContentUpdateService } from './content-update.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'content-update',
    }),
    ContentCreatorModule,
  ],
  providers: [ContentUpdateConsumer, ContentUpdateService],
})
export class ContentUpdateModule {}
