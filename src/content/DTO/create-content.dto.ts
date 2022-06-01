import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateContentDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  url: string;

  @IsOptional()
  thumbnail: Blob;

  @IsOptional()
  @IsArray()
  tags: string[];
}
