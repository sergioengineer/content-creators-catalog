import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContentCreatorDocument = ContentCreator & Document;

@Schema()
export class ContentCreator {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, default: [] })
  socialUrls: string[];

  @Prop({ required: true })
  platformUrl: string;
}

export const ContentCreatorSchema =
  SchemaFactory.createForClass(ContentCreator);
