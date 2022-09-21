import React from 'react';
import { render } from '@testing-library/react';

import StartButton from 'src/components/main/StartButton';

jest.mock('react-redux');

describe('StartButton 컴포넌트', () => {
  it('StartButton 컴포넌트를 호출합니다', () => {
    const { container } = render(<StartButton />);

    expect(container).toHaveTextContent('퀴즈 풀기');
  });
});
