import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SessionsByType, SessionType } from '../renderer/shared/types';
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

  it('shows a <SessionTypeTotal/> for each type of passed in session', () => {
    const sessionTypes = Object.values(SessionType);
    const sessionsByType: SessionsByType = {};
    for (let i = 0; i < sessionTypes.length; i += 1) {
      const sessionType = sessionTypes[i];
      sessionsByType[sessionType] = [];
    }

    render(
      <SessionTotals
        sessionsByType={sessionsByType}
        currentSessionType={SessionType.Focus}
        paused={false}
      />
    );

    sessionTypes.forEach((sessionType) => {
      const sessionTypeTotal = screen.getByText(`${sessionType} session total`);
      expect(sessionTypeTotal).toBeTruthy();
    });
  });
});
