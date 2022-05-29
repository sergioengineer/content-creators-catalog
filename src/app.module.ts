import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentUpdateModule } from './content-updater/content-update.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    ScheduleModule.forRoot(),
    ContentUpdateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
