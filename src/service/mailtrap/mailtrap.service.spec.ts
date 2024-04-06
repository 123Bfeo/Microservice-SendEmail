import { Test, TestingModule } from '@nestjs/testing';
import { MailtrapService } from './mailtrap.service';

describe('MailtrapService', () => {
  let service: MailtrapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailtrapService],
    }).compile();

    service = module.get<MailtrapService>(MailtrapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
