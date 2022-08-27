import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SessionType } from '../renderer/shared/types';
import SessionTypeTotal from '../renderer/SessionTypeTotal';

describe('SessionTypeTotal', () => {
  it('renders', () => {
    expect(
      render(
        <SessionTypeTotal
          sessions={[]}
          sessionType={SessionType.Focus}
          currentSessionType={SessionType.Focus}
          paused={false}
        />
      )
    ).toBeTruthy();
  });

  it('shows the session type total duration in milliseconds', () => {
    const currentSessionType = SessionType.Focus;
    const sessionStart = new Date('2000-01-01T00:00:00');
    const sessionEnd = new Date('2000-01-01T00:00:30');
    const sessionDurationMs = sessionEnd.getTime() - sessionStart.getTime();

    render(
      <SessionTypeTotal
        sessions={[{ start: sessionStart, end: sessionEnd }]}
        sessionType={currentSessionType}
        currentSessionType={SessionType.Focus}
        paused={false}
      />
    );

    const sessionTypeTotal = screen.getByRole('timer', {
      name: `${currentSessionType} session total`,
    });

    expect(sessionTypeTotal).toHaveTextContent(sessionDurationMs.toString());
  });

  describe('session type label', () => {
    it.each(Object.values(SessionType))('can show %p', (sessionType) => {
      render(
        <SessionTypeTotal
          sessions={[]}
          sessionType={sessionType}
          currentSessionType={SessionType.Focus}
          paused={false}
        />
      );

      const sessionTypeTotal = screen.getByText(`${sessionType} session total`);
      expect(sessionTypeTotal).toBeTruthy();
    });
  });
});
