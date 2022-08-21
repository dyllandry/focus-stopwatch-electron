// eslint-disable-next-line import/prefer-default-export
export enum SessionType {
  Rest,
  Focus,
}

export type Session = {
  start: Date;
  end: Date;
};

export type SessionsByType = Record<SessionType, Session[]>;
