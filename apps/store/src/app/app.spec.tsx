import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a header with banner role', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('banner')).toBeTruthy();
  });
});
