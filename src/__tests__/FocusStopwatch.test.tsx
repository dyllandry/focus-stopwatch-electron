import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import FocusStopwatch from '../renderer/FocusStopwatch';

describe('FocusStopwatch', () => {
  it('renders', () => {
    expect(render(<FocusStopwatch />)).toBeTruthy();
  });
});
