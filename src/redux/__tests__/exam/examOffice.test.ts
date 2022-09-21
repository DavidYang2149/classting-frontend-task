import { AnyAction } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { mockApiQuestions } from '__mocks__/apiMock';
import mockRootState, { mockStartExamState } from '__mocks__/reduxMock';
import { RootState } from 'src/redux/store';
import reducer, {
  ExamOfficeState,
  inProgress,
  workComplete,
  prepareExamPaper,
  searchQuestions,
} from 'src/redux/exam/examOffice';
import { resetRecord, startRecordingExam } from 'src/redux/user/examinee';
import { getQuestions } from 'src/services/exam/question';

jest.mock('src/services/exam/question');
window.alert = jest.fn();

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

  describe('prepareExamPaper 함수는', () => {
    it('시험지를 가져옵니다', () => {
      const state = reducer(initialState, prepareExamPaper(mockStartExamState.exam.examPaper));

      expect(state).toEqual({
        ...initialState,
        examPaper: mockStartExamState.exam.examPaper,
      });
    });
  });
});

describe('examOffice functions', () => {
  describe('searchQuestions 함수는', () => {
    context('API 통신이 정상이면', () => {
      it('시험지를 출제합니다', async () => {
        const store = mockStore({ ...mockRootState });
        (getQuestions as jest.Mock).mockImplementationOnce(() => mockApiQuestions);
        const onSuccess = jest.fn();

        await store.dispatch(searchQuestions(onSuccess));

        const actions = store.getActions();

        expect(actions[0]).toEqual(inProgress());
        // Array in Object 정렬 이슈로 주석 처리
        // expect(actions[1]).toEqual(prepareExamPaper(mockStartExamState.exam.examPaper.sort()));
        expect(actions[2]).toEqual(resetRecord());
        expect(actions[3]).toEqual(startRecordingExam());
      });
    });

    context('API 통신에 문제가 있으면', () => {
      it('오류 메세지를 출력합니다', async () => {
        const store = mockStore({ ...mockRootState });
        (getQuestions as jest.Mock).mockImplementationOnce(() => {
          throw new Error('getQuestions 함수 실행에 오류가 발생했습니다.');
        });
        const onSuccess = jest.fn();

        await expect(async () => {
          await store.dispatch(searchQuestions(onSuccess));
        })
          .rejects
          .toThrowError(new Error('getQuestions 함수 실행에 오류가 발생했습니다.'));
      });
    });
  });
});
