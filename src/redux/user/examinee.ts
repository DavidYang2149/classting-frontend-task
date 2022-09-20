import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/store';
import { IAnswer, IReport } from 'src/types/quiz';

export type examineeState = ReturnType<typeof reducer>;
export interface examineeSliceState {
  isLoading: boolean;
  currentIndex: number;
  answerPaper: IAnswer[];
  reportPaper: IReport;
}

const initialState: examineeSliceState = {
  isLoading: false,
  currentIndex: 0,
  answerPaper: [],
  reportPaper: {
    beginTime: 0,
    finishTime: 0,
  },
};

const { actions, reducer } = createSlice({
  name: 'examinee',
  initialState,
  reducers: {
    inProgress(state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    workComplete(state) {
      return {
        ...state,
        isLoading: false,
      };
    },
    moveCurrentIndex(state, { payload }: PayloadAction<number>) {
      return {
        ...state,
        currentIndex: payload,
      };
    },
    startRecordingExam(state) {
      return {
        ...state,
        reportPaper: {
          ...state.reportPaper,
          beginTime: new Date().getTime(),
        },
      };
    },
    finishRecordExam(state) {
      return {
        ...state,
        reportPaper: {
          ...state.reportPaper,
          finishTime: new Date().getTime(),
        },
      };
    },
    markingAnswer(state, { payload }: PayloadAction<IAnswer>) {
      return {
        ...state,
        answerPaper: [...state.answerPaper, payload],
      };
    },
    resetRecord(state) {
      return {
        ...state,
        isLoading: false,
        currentIndex: 0,
        answerPaper: [],
        reportPaper: {
          beginTime: 0,
          finishTime: 0,
        },
      };
    },
  },
});

/**
 * 퀴즈 응시자가 답안을 선택합니다.
 */
export const selectAnswer = (answer: string) => (currentIndex: number) => async (
  dispatch: Dispatch<PayloadAction<IAnswer>>,
  getState: () => RootState,
) => {
  const { examPaper } = getState().exam;

  const isCorrect = examPaper[currentIndex].answers.filter((question) => question.answer === answer)[0].isCorrect || false;
  dispatch(actions.markingAnswer({ answer, isCorrect }));
};

/**
 * 퀴즈를 모두 풀고 시험 결과를 보여기 위해 자료를 준비합니다.
 */
export const showReport = (onSuccess: () => Promise<boolean>) => async (
  dispatch: Dispatch<PayloadAction<undefined>>,
) => {
  dispatch(actions.finishRecordExam());

  onSuccess();
};

export const {
  inProgress,
  workComplete,
  moveCurrentIndex,
  startRecordingExam,
  finishRecordExam,
  markingAnswer,
  resetRecord,
} = actions;

export default reducer;
