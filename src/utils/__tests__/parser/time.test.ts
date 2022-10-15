import { padTo2Digits } from 'src/utils/parser/time';

describe('padTo2Digits', () => {
  context('한자리 숫자를 입력하면', () => {
    it('앞에 0을 붙입니다', () => {
      expect(padTo2Digits(4)).toBe('04');
    });
  });

  context('두자리 숫자를 입력하면', () => {
    it('숫자를 그대로 문자열로 변경합니다', () => {
      expect(padTo2Digits(11)).toBe('11');
    });
  });
});
