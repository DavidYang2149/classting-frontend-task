/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';

import mockRootState, { mockUseDispatch, mockUseSelector } from '__mocks__/reduxMock';
import Home from 'src/pages/index';
import { RootState } from 'src/redux/store';

jest.mock('react-redux');

describe('메인화면', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    dispatch.mockClear();
    mockUseDispatch.mockImplementation(() => dispatch);
    mockUseSelector.mockImplementation((selector: (arg: RootState) => void) => selector({
      ...mockRootState,
    }));
  });

  it('메인 타이틀을 확인합니다', () => {
    const { container } = render(<Home />);

    expect(container).toHaveTextContent(/Classting Quiz/i);
  });
});
