import { renderHook, act } from '@testing-library/react-hooks';
import mockRouter from 'next-router-mock';
import { useRouter } from 'next/router';

import { mockStartExamState, mockUseDispatch, mockUseSelector } from '__mocks__/reduxMock';
import useQuestion from 'src/hooks/question/useQuestion';
import { RootState } from 'src/redux/store';

// eslint-disable-next-line global-require
jest.mock('next/router', () => require('next-router-mock'));
jest.mock('react-redux');

describe('useQuestion', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();

    dispatch.mockClear();
    mockUseDispatch.mockImplementation(() => dispatch);
    mockUseSelector.mockImplementation((selector: (arg: RootState) => void) => selector({
      ...mockStartExamState,
    }));
  });

  describe('handleClickAnswer 함수는', () => {
    it('dispatch 함수를 호출합니다', () => {
      const { result } = renderHook(() => useQuestion());

      act(() => {
        const event = { target: { value: 'Physics' } } as unknown as React.MouseEvent<HTMLButtonElement>;

        result.current.handleClickAnswer(event);
      });

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  describe('handleClickPrevMoveQuestion 함수는', () => {
    it('이전 문제로 이동합니다', () => {
      mockRouter.setCurrentUrl('/question?index=3');
      const { result } = renderHook(() => useQuestion());
      const { result: routerResult } = renderHook(() => useRouter());

      act(() => {
        result.current.handleClickPrevMoveQuestion();
      });

      expect(routerResult.current).toMatchObject({ asPath: 'question?index=2' });
    });
  });

  describe('handleClickNextMoveQuestion 함수는', () => {
    it('다음 문제로 이동합니다', () => {
      mockRouter.setCurrentUrl('/question?index=0');
      const { result } = renderHook(() => useQuestion());
      const { result: routerResult } = renderHook(() => useRouter());

      act(() => {
        result.current.handleClickNextMoveQuestion();
      });

      expect(routerResult.current).toMatchObject({ asPath: 'question?index=1' });
    });
  });

  describe('handleClickShowReport 함수는', () => {
    it('dispatch 함수를 호출합니다', () => {
      const { result } = renderHook(() => useQuestion());

      act(() => {
        result.current.handleClickShowReport();
      });

      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
