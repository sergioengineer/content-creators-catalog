import { IsNotEmpty } from 'class-validator';
export class CreateContentCreatorDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  socialUrls: string[];
}
