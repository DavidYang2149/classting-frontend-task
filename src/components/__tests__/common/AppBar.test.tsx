import React from 'react';
import { render } from '@testing-library/react';

import AppBar from 'src/components/common/AppBar';

describe('AppBar 컴포넌트', () => {
  it('AppBar 컴포넌트를 호출합니다', () => {
    const { container } = render(<AppBar />);

    expect(container).toHaveTextContent('CLASSTING QUIZ');
  });
});
