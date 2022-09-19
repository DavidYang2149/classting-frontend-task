import React from 'react';

import useStartButton from 'src/hooks/main/useStartButton';

const StartButton = () => {
  const { handleClickStartExam } = useStartButton();

  return (
    <button
      className="main-button"
      type="button"
      onClick={handleClickStartExam}
    >
      퀴즈 풀기
    </button>
  );
};

export default StartButton;
