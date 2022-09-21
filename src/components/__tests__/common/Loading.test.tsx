import React from 'react';
import { render } from '@testing-library/react';

import Loading from 'src/components/common/Loading';

describe('Loading 컴포넌트', () => {
  it('Loading 컴포넌트를 호출합니다', () => {
    const { container } = render(<Loading />);

    expect(container).toHaveTextContent('Loading...');
  });
});
