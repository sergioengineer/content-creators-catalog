import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ContentCreator,
  ContentCreatorDocument,
} from './content-creator.schema';
import { CreateContentCreatorDTO } from './DTO/create-content-creator.dto';
import { UpdateContentCreatorDTO } from './DTO/update-content-creator.dto';

@Injectable()
export class ContentCreatorService {
  constructor(
    @InjectModel(ContentCreator.name)
    private contentCreatorModel: Model<ContentCreatorDocument>,
  ) {}

  async create(createDTO: CreateContentCreatorDTO): Promise<ContentCreator> {
    const contentCreator = this.contentCreatorModel.create(createDTO);
    return contentCreator;
  }
  async update(updateDTO: UpdateContentCreatorDTO): Promise<ContentCreator> {
    const contentCreator = this.contentCreatorModel.create(updateDTO);
    return contentCreator;
  }

  async read(id: string) {
    !!id
      ? this.contentCreatorModel.findById(id)
      : this.contentCreatorModel.find();
  }

  async delete(id: string) {
    this.contentCreatorModel.deleteOne({
      _id: id,
    });
  }
}
