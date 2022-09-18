import React from 'react';

import AppBar from 'src/components/common/AppBar';
import CustomHead from 'src/components/common/CustomHead';
import Question from 'src/components/question/Question';

const QuestionPage = () => {
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
