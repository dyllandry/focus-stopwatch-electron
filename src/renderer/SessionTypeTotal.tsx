import { Session, SessionType } from './shared/types';

const SessionTypeTotal = (props: {
  sessions: Session[];
  currentSessionType: SessionType;
  paused: boolean;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { sessions, currentSessionType, paused } = props;

  const sessionsDurationTotal = sessions.reduce<number>(
    (totalMs: number, session: Session) => {
      const sessionEnd = session.end || Date.now();
      const sessionDurationMs = sessionEnd.getTime() - session.start.getTime();
      return totalMs + sessionDurationMs;
    },
    0
  );

  const sessionTypeTotalLabelId = `${currentSessionType}-label`;

  return (
    <div>
      <span id={sessionTypeTotalLabelId} style={{ marginRight: 8 }}>
        {`${currentSessionType} session total`}
      </span>
      <span role="timer" aria-labelledby={sessionTypeTotalLabelId}>
        {sessionsDurationTotal}
      </span>
    </div>
  );
};

export default SessionTypeTotal;
