import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import AppBar from 'src/components/common/AppBar';
import CustomHead from 'src/components/common/CustomHead';
import Question from 'src/components/question/Question';
import useQuestion from 'src/hooks/question/useQuestion';

const QuestionPage = () => {
  const router = useRouter();
  const { examPaper } = useQuestion();

  useEffect(() => {
    if (examPaper.length < 1) {
      router.replace('/');
    }
  // router를 관찰 대상에서 임의로 제거: 라우트의 변경은 해당 useEffect의 목적과 연관이 없음
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examPaper]);

  return (
    <div>
      <CustomHead
        title="Question - Classting Quiz"
        content="Classting Quiz Question page"
      />
      <AppBar />
      <main className="question-content">
        <Question />
      </main>
    </div>
  );
};

export default QuestionPage;
