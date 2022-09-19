import { useRouter } from 'next/router';

import { useAppDispatch, useRootState } from 'src/redux/store';
import { searchQuestions } from 'src/redux/exam/examOffice';
import { resetRecord } from 'src/redux/user/examinee';
import { parseMillisecondsToTime } from 'src/utils/parser/time';

const useReport = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { examPaper } = useRootState((state) => (state.exam));
  const { answerPaper } = useRootState((state) => (state.user));
  const { beginTime, finishTime } = useRootState((state) => (state.user.reportPaper));

  const correctCount = answerPaper.filter((answer) => answer.isCorrect === true).length;
  const inCorrectCount = answerPaper.filter((answer) => answer.isCorrect === false).length;

  const recordTime = parseMillisecondsToTime(finishTime - beginTime);

  const isDone = examPaper.length !== 0 && examPaper.length === answerPaper.length;

  const handleClickReExam = () => {
    dispatch(resetRecord());
    dispatch(searchQuestions(router));
  };

  const handleClickReturnMain = () => {
    dispatch(resetRecord());
    router.replace('/');
  };

  return {
    correctCount,
    inCorrectCount,
    recordTime,
    isDone,
    handleClickReExam,
    handleClickReturnMain,
  };
};

export default useReport;
