import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { useAppDispatch } from 'src/redux/store';
import { searchQuestions } from 'src/redux/exam/examOffice';

const useStartButton = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleClickStartExam = useCallback(() => {
    const onSuccess = () => router.push('/question');
    dispatch(searchQuestions(onSuccess));
  }, [dispatch, router]);

  return {
    handleClickStartExam,
  };
};

export default useStartButton;
