import { Test, TestingModule } from '@nestjs/testing';
import { MailtrapController } from './mailtrap.controller';

describe('MailtrapController', () => {
  let controller: MailtrapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailtrapController],
    }).compile();

    controller = module.get<MailtrapController>(MailtrapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
