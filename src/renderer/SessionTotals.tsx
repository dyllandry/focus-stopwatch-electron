import SessionTypeTotal from './SessionTypeTotal';
import { SessionsByType, SessionType } from './shared/types';

const SessionTotals = (props: {
  sessionsByType: SessionsByType;
  currentSessionType: SessionType;
  paused: boolean;
}) => {
  const { sessionsByType, currentSessionType, paused } = props;
  return (
    <div>
      <SessionTypeTotal
        sessions={sessionsByType[currentSessionType]}
        currentSessionType={currentSessionType}
        paused={paused}
      />
    </div>
  );
};

export default SessionTotals;
