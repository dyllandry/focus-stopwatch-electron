import SessionTypeTotal from './SessionTypeTotal';
import { SessionsByType, SessionType } from './shared/types';

const SessionTotals = (props: {
  sessionsByType: SessionsByType;
  currentSessionType: SessionType;
  paused: boolean;
}) => {
  const passedSessionTypes = Object.keys(props.sessionsByType) as SessionType[];
  const sessionTypeTotals = passedSessionTypes.map((sessionType) => (
    <SessionTypeTotal
      key={sessionType}
      sessions={props.sessionsByType[sessionType]}
      sessionType={sessionType}
      currentSessionType={props.currentSessionType}
      paused={props.paused}
    />
  ));
  return <div>{sessionTypeTotals}</div>;
};

export default SessionTotals;
