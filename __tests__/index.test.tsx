/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';

import Home from 'src/pages/index';

describe('메인화면', () => {
  it('메인 타이틀을 확인합니다', () => {
    const { container } = render(<Home />);

    expect(container).toHaveTextContent(/Classting Quiz/i);
  });
});
