import { renderHook, act } from '@testing-library/react-hooks';

import { mockShowReportState, mockUseDispatch, mockUseSelector } from '__mocks__/reduxMock';
import useReport from 'src/hooks/report/useReport';
import { RootState } from 'src/redux/store';

// eslint-disable-next-line global-require
jest.mock('next/router', () => require('next-router-mock'));
jest.mock('react-redux');

describe('useReport', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();

    dispatch.mockClear();
    mockUseDispatch.mockImplementation(() => dispatch);
    mockUseSelector.mockImplementation((selector: (arg: RootState) => void) => selector({
      ...mockShowReportState,
    }));
  });

  describe('handleClickReExam 함수는', () => {
    it('dispatch 함수를 호출합니다', () => {
      const { result } = renderHook(() => useReport());

      act(() => {
        result.current.handleClickReExam();
      });

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  describe('handleClickReturnMain 함수는', () => {
    it('dispatch 함수를 호출합니다', () => {
      const { result } = renderHook(() => useReport());

      act(() => {
        result.current.handleClickReturnMain();
      });

      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
