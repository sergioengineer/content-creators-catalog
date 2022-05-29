import { Test, TestingModule } from '@nestjs/testing';
import { ContentUpdateService } from './content-update.service';

describe('ContentUpdaterService', () => {
  let service: ContentUpdateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentUpdateService],
    }).compile();

    service = module.get<ContentUpdateService>(ContentUpdateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
