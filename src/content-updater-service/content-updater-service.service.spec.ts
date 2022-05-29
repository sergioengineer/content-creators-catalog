import { Test, TestingModule } from '@nestjs/testing';
import { ContentUpdaterServiceService } from './content-updater-service.service';

describe('ContentUpdaterServiceService', () => {
  let service: ContentUpdaterServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentUpdaterServiceService],
    }).compile();

    service = module.get<ContentUpdaterServiceService>(ContentUpdaterServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
