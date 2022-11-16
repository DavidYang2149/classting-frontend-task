import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import AppBar from 'src/components/common/AppBar';
import CustomHead from 'src/components/common/CustomHead';
import Report from 'src/components/report/Report';
import useReport from 'src/hooks/report/useReport';

const QuestionPage = () => {
  const router = useRouter();
  const { isDone } = useReport();

  useEffect(() => {
    if (!isDone) {
      router.replace('/');
    }
  }, [router, isDone]);

  return (
    <div>
      <CustomHead
        title="Report - Random Quiz"
        content="Random Quiz Report page"
      />
      <AppBar />
      <main className="report-content">
        <Report />
      </main>
    </div>
  );
};

export default QuestionPage;
