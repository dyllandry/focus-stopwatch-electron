import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { SessionType } from '../renderer/shared/types';
import SessionTotals from '../renderer/SessionTotals';

describe('SessionTotals', () => {
  it('renders', () => {
    expect(
      render(
        <SessionTotals
          paused={false}
          currentSessionType={SessionType.Rest}
          sessionsByType={{ [SessionType.Focus]: [], [SessionType.Rest]: [] }}
        />
      )
    ).toBeTruthy();
  });
});
