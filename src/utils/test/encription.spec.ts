import Encription from '../encription';
import { Test } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';

describe('Encription', () => {
  const TEST_STRING = 'test1';
  const HASHED = '$2b$10$FXJ5PXBTzzEzww2l1t55w.CE1LmK3p5PSuKog7YahKzErBGtuZXPy';

  beforeEach(async () => {
    await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: ['.env.test'],
          isGlobal: true,
        }),
      ],
    }).compile();
  });
  describe('encrypt', () => {
    it('Test that the compare function works correctly', () => {
      const HASHED_TEST = Encription.encrypt(TEST_STRING);

      expect(Encription.compare(HASHED_TEST, TEST_STRING)).toBe(true);
    });
  });

  describe('compare', () => {
    it('Test that the compare function works correctly', () => {
      const COMPARATION = Encription.compare(HASHED, TEST_STRING);

      expect(COMPARATION).toBe(true);
    });
  });
});
