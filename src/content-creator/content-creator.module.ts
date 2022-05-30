import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContentCreator, ContentCreatorSchema } from './content-creator.schema';
import { ContentCreatorService } from './content-creator.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ContentCreator.name, schema: ContentCreatorSchema },
    ]),
  ],
  providers: [ContentCreatorService],
  exports: [ContentCreatorService],
})
export class ContentCreatorModule {}
