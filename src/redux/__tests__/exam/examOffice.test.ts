import { AnyAction } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import mockRootState from '__mocks__/reduxMock';
import { RootState } from 'src/redux/store';
import reducer, {
  ExamOfficeState,
  inProgress,
  workComplete,
} from 'src/redux/exam/examOffice';

const middlewares = [thunk];
const mockStore = configureStore<ExamOfficeState | RootState, ThunkDispatch<RootState, void, AnyAction>>(middlewares);

describe('examOffice reducers', () => {
  const initialState: ExamOfficeState = {
    isLoading: false,
    examPaper: [],
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
});
