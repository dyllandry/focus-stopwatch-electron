import { Session, SessionType } from './shared/types';

const SessionTypeTotal = (props: {
  sessions?: Session[];
  sessionType: SessionType;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, react/no-unused-prop-types
  currentSessionType: SessionType;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, react/no-unused-prop-types
  paused: boolean;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/ban-ts-comment
  // @ts-ignore

  const sessionsDurationTotal = props.sessions.reduce(
    (totalMs: number, session: Session) => {
      const sessionEnd = session.end || Date.now();
      const sessionDurationMs = sessionEnd.getTime() - session.start.getTime();
      return totalMs + sessionDurationMs;
    },
    0
  );

  const sessionTypeTotalLabelId = `${props.sessionType}-label`;

  return (
    <div>
      <span id={sessionTypeTotalLabelId} style={{ marginRight: 8 }}>
        {`${props.sessionType} session total`}
      </span>
      <span role="timer" aria-labelledby={sessionTypeTotalLabelId}>
        {sessionsDurationTotal}
      </span>
    </div>
  );
};

export default SessionTypeTotal;
