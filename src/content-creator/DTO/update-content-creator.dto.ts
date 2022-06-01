import { IsNotEmpty } from 'class-validator';

export class UpdateContentCreatorDTO {
  @IsNotEmpty()
  id: string;
  name: string;
  socialUrls: string[];
}
