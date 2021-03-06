import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContentCreatorDocument = ContentCreator & Document;

@Schema()
export class ContentCreator {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [String], required: true, default: [] })
  socialUrls: string[];

  @Prop({ required: true })
  platformUrl: string;

  @Prop()
  picture: Blob;
}

export const ContentCreatorSchema =
  SchemaFactory.createForClass(ContentCreator);
