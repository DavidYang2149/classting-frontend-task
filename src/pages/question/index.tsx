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
  }, [router, examPaper]);

  return (
    <div>
      <CustomHead
        title="Question - Classting Quiz"
        content="Classting Quiz Question page"
      />
      <AppBar />
      <main>
        <Question />
      </main>
    </div>
  );
};

export default QuestionPage;
