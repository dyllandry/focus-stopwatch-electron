import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Session, SessionsByType, SessionType } from './shared/types';

export interface FocusStopwatchState {
  currentSessionType: SessionType;
  sessionsByType: SessionsByType;
}

const focusStopwatchInitialState: FocusStopwatchState = {
  currentSessionType: SessionType.Focus,
  sessionsByType: {
    [SessionType.Focus]: [],
    [SessionType.Rest]: [],
  },
};

function createSession(): Session {
  return {
    start: new Date(),
    end: null,
  };
}

function endSession(session: Session) {
  session.end = new Date();
}

export const focusStopwatchSlice = createSlice({
  name: 'focusStopwatch',
  initialState: focusStopwatchInitialState,
  reducers: {
    startSession: (state, action: PayloadAction<SessionType>) => {
      // 1) end existing session if one exists
      const currentSessionList = state.sessionsByType[state.currentSessionType];
      if (currentSessionList) {
        const currentSession =
          currentSessionList[currentSessionList.length - 1];
        if (currentSession) {
          endSession(currentSession);
        }
      }
      // 2) start a new session
      const newSessionType = action.payload;
      let newSessionTypeList = state.sessionsByType[newSessionType];
      if (!newSessionTypeList) {
        newSessionTypeList = [];
        state.sessionsByType[newSessionType] = newSessionTypeList;
      }
      const newSession = createSession();
      newSessionTypeList.push(newSession);
    },
  },
});

export default focusStopwatchSlice.reducer;
