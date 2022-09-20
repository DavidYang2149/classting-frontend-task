import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'src/redux/store';

const mockRootState: RootState = {
  exam: {
    isLoading: false,
    examPaper: [],
  },
  user: {
    isLoading: false,
    answerPaper: [],
    reportPaper: {
      beginTime: 0,
      finishTime: 0,
    },
  },
};

export const mockUseDispatch = useDispatch as jest.Mock;
export const mockUseSelector = useSelector as jest.Mock;

export default mockRootState;
