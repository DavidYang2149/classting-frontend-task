import React from 'react';
import { render } from '@testing-library/react';

import NotFound from 'src/components/common/NotFound';

describe('NotFound 컴포넌트', () => {
  it('NotFound 컴포넌트를 호출합니다', () => {
    const { container } = render(<NotFound />);

    expect(container).toHaveTextContent('메인으로 돌아가기');
  });
});
