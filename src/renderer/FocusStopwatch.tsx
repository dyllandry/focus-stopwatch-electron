import { useState } from 'react';
import { SessionsByType, SessionType } from './shared/types';

const FocusStopwatch = () => {
  const [paused, setPaused] = useState<boolean>(false);
  const [sessionsByType, setSessionByType] = useState<SessionsByType>({
    [SessionType.Focus]: [],
    [SessionType.Rest]: [],
  });
  const [currentSessionType, setCurrentSessionType] = useState<SessionType>(
    SessionType.Focus
  );

  return <h1>Focus Stopwatch</h1>;
};

export default FocusStopwatch;
