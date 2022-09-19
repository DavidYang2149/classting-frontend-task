import { useRouter } from 'next/router';

import { useAppDispatch, useRootState } from 'src/redux/store';
import { moveCurrentIndex, selectAnswer, showReport } from 'src/redux/user/examinee';

const useQuestion = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { examPaper } = useRootState((state) => (state.exam));
  const { currentIndex, answerPaper } = useRootState((state) => (state.user));

  const handleClickAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = (event.target as HTMLButtonElement);
    dispatch(selectAnswer(value));
  };

  const handleClickMoveQuestion = (value: number) => {
    dispatch(moveCurrentIndex(value));
  };

  const handleClickPrevMoveQuestion = () => {
    handleClickMoveQuestion(currentIndex - 1);
  };

  const handleClickNextMoveQuestion = () => {
    handleClickMoveQuestion(currentIndex + 1);
  };

  const handleClickShowReport = () => {
    dispatch(showReport(router));
  };

  return {
    currentIndex,
    examPaper,
    answerPaper,
    handleClickAnswer,
    handleClickPrevMoveQuestion,
    handleClickNextMoveQuestion,
    handleClickShowReport,
  };
};

export default useQuestion;
