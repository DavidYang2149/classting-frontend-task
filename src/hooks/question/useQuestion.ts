import { useRouter } from 'next/router';

import { useAppDispatch, useRootState } from 'src/redux/store';
import { selectAnswer, showReport } from 'src/redux/user/examinee';

const useQuestion = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { index } = router.query;

  const currentIndex = Number.parseInt(index as string, 10) || 0;

  const { examPaper } = useRootState((state) => (state.exam));
  const { answerPaper } = useRootState((state) => (state.user));

  const handleClickAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = (event.target as HTMLButtonElement);
    dispatch(selectAnswer(value)(currentIndex));
  };

  const handleClickPrevMoveQuestion = () => {
    router.push(`question?index=${currentIndex - 1}`);
  };

  const handleClickNextMoveQuestion = () => {
    router.push(`question?index=${currentIndex + 1}`);
  };

  const handleClickShowReport = () => {
    const onSuccess = () => router.push('/report');
    dispatch(showReport(onSuccess));
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
