import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import FocusStopwatchControls from '../renderer/FocusStopwatchControls';

describe('FocusStopwatchControls', () => {
  it('renders', () => {
    expect(render(<FocusStopwatchControls />)).toBeTruthy();
  });
});
