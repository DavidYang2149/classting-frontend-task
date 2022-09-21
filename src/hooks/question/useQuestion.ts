import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { useAppDispatch, useRootState } from 'src/redux/store';
import { selectAnswer, showReport } from 'src/redux/user/examinee';

const useQuestion = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { index } = router.query;

  const currentIndex = Number.parseInt(index as string, 10) || 0;

  const { examPaper } = useRootState((state) => (state.exam));
  const { answerPaper } = useRootState((state) => (state.user));

  const handleClickAnswer = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = (event.target as HTMLButtonElement);
    dispatch(selectAnswer(value)(currentIndex));
  }, [dispatch, currentIndex]);

  const handleClickPrevMoveQuestion = useCallback(() => {
    router.push(`question?index=${currentIndex - 1}`);
  }, [router, currentIndex]);

  const handleClickNextMoveQuestion = useCallback(() => {
    router.push(`question?index=${currentIndex + 1}`);
  }, [router, currentIndex]);

  const handleClickShowReport = useCallback(() => {
    const onSuccess = () => router.push('/report');
    dispatch(showReport(onSuccess));
  }, [dispatch, router]);

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
