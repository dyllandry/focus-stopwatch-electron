import { useState } from 'react';
import SessionTotals from './SessionTotals';
import { SessionsByType, SessionType } from './shared/types';

const FocusStopwatch = () => {
  const [paused] = useState<boolean>(false);
  const [sessionsByType] = useState<SessionsByType>({
    [SessionType.Focus]: [],
    [SessionType.Rest]: [],
  });
  const [currentSessionType] = useState<SessionType>(SessionType.Focus);

  return (
    <div>
      <h1>Focus Stopwatch</h1>
      <SessionTotals
        sessionsByType={sessionsByType}
        currentSessionType={currentSessionType}
        paused={paused}
      />
    </div>
  );
};

export default FocusStopwatch;
