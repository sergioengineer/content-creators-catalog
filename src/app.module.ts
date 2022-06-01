import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentCreatorModule } from './content-creator/content-creator.module';
import { ContentUpdateModule } from './content-updater/content-update.module';
import { ContentModule } from './content/content.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
      },
    }),
    MongooseModule.forRoot('mongodb://mongodb/CCC'),
    ScheduleModule.forRoot(),
    ContentUpdateModule,
    ContentCreatorModule,
    ContentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
