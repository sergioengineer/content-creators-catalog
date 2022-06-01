import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Content, ContentDocument } from './content.schema';
import { CreateContentDTO } from './DTO/create-content.dto';
import { UpdateContentDTO } from './DTO/update-content.dto';

@Injectable()
export class ContentService {
  constructor(
    @InjectModel(Content.name) private contentModel: Model<ContentDocument>,
  ) {}

  async create(createDTO: CreateContentDTO) {
    this.contentModel.create(createDTO);
  }

  async read(id) {
    !!id ? this.contentModel.findById(id) : this.contentModel.find();
  }

  async update(updateDTO: UpdateContentDTO) {
    this.contentModel.updateOne({ _id: updateDTO.id }, updateDTO);
  }

  async delete(id) {
    this.contentModel.deleteOne({ _id: id });
  }
}
