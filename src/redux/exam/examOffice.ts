import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { NextRouter } from 'next/router';

import { getQuestions } from 'src/services/exam/question';
import { IQuestion } from 'src/types/quiz';
import parseQuestions from 'src/utils/parser/question';

import { startRecordingExam } from '../user/examinee';

export type ExamOfficeState = ReturnType<typeof reducer>;
export interface ExamOfficeSliceState {
  isLoading: boolean;
  examPaper: IQuestion[];
}

const initialState: ExamOfficeSliceState = {
  isLoading: false,
  examPaper: [],
};

const { actions, reducer } = createSlice({
  name: 'examOffice',
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
    prepareExamPaper(state, { payload }: PayloadAction<IQuestion[]>) {
      return {
        ...state,
        examPaper: [...payload],
      };
    },
  },
});

/**
 * 퀴즈 정보를 가져옵니다.
 */
export const searchQuestions = (router: NextRouter) => async (
  dispatch: Dispatch<PayloadAction<IQuestion[] | undefined>>,
) => {
  try {
    dispatch(actions.inProgress());

    const response = await getQuestions();
    const newExamPaper = parseQuestions(response);

    dispatch(actions.prepareExamPaper(newExamPaper));
    dispatch(startRecordingExam());

    router.push('/question');
  } catch (error) {
    alert('시험지를 가져오는데 실패했습니다. 잠시 후 다시 시도해 주세요.');
    throw new Error((error as Error).message);
  } finally {
    dispatch(actions.workComplete());
  }
};

export const {
  inProgress,
  workComplete,
  prepareExamPaper,
} = actions;

export default reducer;
