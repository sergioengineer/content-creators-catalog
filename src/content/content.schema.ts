import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ContentCreator } from 'src/content-creator/content-creator.schema';

export type ContentDocument = Content & Document;

@Schema()
export class Content {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  url: string;

  @Prop()
  thumbnail: Blob;

  @Prop({ type: [String], required: true, default: [] })
  tags: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: ContentCreator.name })
  contentCreator: ContentCreator;
}

export const ContentSchema = SchemaFactory.createForClass(Content);
