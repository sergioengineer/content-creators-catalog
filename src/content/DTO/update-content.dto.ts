import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateContentDTO {
  @IsNotEmpty()
  _id: string;

  @IsString()
  title: string;

  @IsString()
  url: string;

  @IsOptional()
  thumbnail: Blob;

  @IsArray()
  tags: string[];
}
