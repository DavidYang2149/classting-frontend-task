import { useRouter } from 'next/router';

import { useAppDispatch } from 'src/redux/store';
import { searchQuestions } from 'src/redux/exam/examOffice';

const useStartButton = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleClickStartExam = () => {
    dispatch(searchQuestions(router));
  };

  return {
    handleClickStartExam,
  };
};

export default useStartButton;
