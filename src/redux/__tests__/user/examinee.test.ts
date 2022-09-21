import { AnyAction } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockDate from 'mockdate';

import { mockStartExamState } from '__mocks__/reduxMock';
import { RootState } from 'src/redux/store';
import reducer, {
  examineeState,
  finishRecordExam,
  inProgress,
  markingAnswer,
  resetRecord,
  selectAnswer,
  showReport,
  startRecordingExam,
  workComplete,
} from 'src/redux/user/examinee';

MockDate.set(new Date(1466424490000));

const middlewares = [thunk];
const mockStore = configureStore<examineeState | RootState, ThunkDispatch<RootState, void, AnyAction>>(middlewares);

describe('examinee reducers', () => {
  const initialState: examineeState = {
    isLoading: false,
    answerPaper: [],
    reportPaper: {
      beginTime: 0,
      finishTime: 0,
    },
  };

  context('state가 undefined이면', () => {
    it('initialState를 변환합니다', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('inProgress 함수는', () => {
    it('작업이 진행 중인 것으로 변환합니다', () => {
      const state = reducer(initialState, inProgress());

      expect(state).toEqual({
        ...initialState,
        isLoading: true,
      });
    });
  });

  describe('workComplete 함수는', () => {
    it('작업이 종료되었음을 처리합니다', () => {
      const state = reducer(initialState, workComplete());

      expect(state).toEqual({
        ...initialState,
        isLoading: false,
      });
    });
  });

  describe('startRecordingExam 함수는', () => {
    it('시험 시작 시간을 기록합니다', () => {
      const state = reducer(initialState, startRecordingExam());

      expect(state).toEqual({
        ...initialState,
        reportPaper: {
          ...initialState.reportPaper,
          beginTime: new Date().getTime(),
        },
      });
    });
  });

  describe('finishRecordExam 함수는', () => {
    it('시험 시작 시간을 기록합니다', () => {
      const state = reducer(initialState, finishRecordExam());

      expect(state).toEqual({
        ...initialState,
        reportPaper: {
          ...initialState.reportPaper,
          finishTime: new Date().getTime(),
        },
      });
    });
  });

  describe('markingAnswer 함수는', () => {
    it('정답을 기록합니다', () => {
      const state = reducer(initialState, markingAnswer({ answer: 'Philosophy', isCorrect: false }));

      expect(state).toStrictEqual({
        ...initialState,
        answerPaper: [...initialState.answerPaper, { answer: 'Philosophy', isCorrect: false }],
      });
    });
  });

  describe('resetRecord 함수는', () => {
    it('기록을 초기화합니다', () => {
      const state = reducer(initialState, resetRecord());

      expect(state).toEqual({
        ...initialState,
      });
    });
  });
});

describe('examinee functions', () => {
  describe('selectAnswer 함수는', () => {
    it('시험지를 출제합니다', async () => {
      const store = mockStore({ ...mockStartExamState });

      await store.dispatch(selectAnswer('Physics')(0));

      const actions = store.getActions();

      expect(actions[0]).toEqual(markingAnswer({ answer: 'Physics', isCorrect: false }));
    });
  });

  describe('showReport 함수는', () => {
    it('시험 시간을 종료합니다', async () => {
      const store = mockStore({ ...mockStartExamState });
      const onSuccess = jest.fn();

      await store.dispatch(showReport(onSuccess));

      const actions = store.getActions();

      expect(actions[0]).toEqual(finishRecordExam());
    });
  });
});
