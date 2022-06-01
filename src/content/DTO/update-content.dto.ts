import { IsNotEmpty } from 'class-validator';

export class UpdateContentDTO {
  @IsNotEmpty()
  id: string;
}
