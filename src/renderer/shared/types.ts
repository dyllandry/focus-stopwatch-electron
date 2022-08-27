// eslint-disable-next-line import/prefer-default-export
export enum SessionType {
  Rest = 'rest',
  Focus = 'focus',
}

export type Session = {
  start: Date;
  end: Date;
};

export type SessionsByType = {
  // The ? means that not every key of SessionType has to be in every SessionsByType object.
  // So you could have just { SessionType.Rest: [] } and not need to have a SessionType.Focus key
  [sessionType in SessionType]?: Session[];
};
