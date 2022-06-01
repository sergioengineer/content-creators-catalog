import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateContentCreatorDTO {
  @IsNotEmpty()
  _id: string;

  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsArray()
  socialUrls: string[];

  @IsString()
  @IsNotEmpty()
  platformUrl: string;

  @IsOptional()
  picture: Blob;
}
