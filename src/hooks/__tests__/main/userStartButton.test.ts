import { renderHook, act } from '@testing-library/react-hooks';

import mockRootState, { mockUseDispatch, mockUseSelector } from '__mocks__/reduxMock';
import useStartButton from 'src/hooks/main/useStartButton';
import { RootState } from 'src/redux/store';

jest.mock('react-redux');

describe('useStartButton', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();

    dispatch.mockClear();
    mockUseDispatch.mockImplementation(() => dispatch);
    mockUseSelector.mockImplementation((selector: (arg: RootState) => void) => selector({
      ...mockRootState,
    }));
  });

  describe('handleClickStartExam 함수는', () => {
    it('dispatch 함수를 호출합니다', () => {
      const { result } = renderHook(() => useStartButton());

      act(() => {
        result.current.handleClickStartExam();
      });

      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
