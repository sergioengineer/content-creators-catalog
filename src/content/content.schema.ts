import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContentDocument = Content & Document;

@Schema()
export class Content {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, default: [] })
  socialLinks: string[];
}

export const ContentSchema = SchemaFactory.createForClass(Content);
