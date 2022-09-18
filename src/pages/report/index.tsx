import React from 'react';

import AppBar from 'src/components/common/AppBar';
import CustomHead from 'src/components/common/CustomHead';
import Report from 'src/components/report/Report';

const QuestionPage = () => {
  return (
    <div>
      <CustomHead
        title="Report - Classting Quiz"
        content="Classting Quiz Report page"
      />
      <AppBar />
      <main>
        <Report />
      </main>
    </div>
  );
};

export default QuestionPage;
