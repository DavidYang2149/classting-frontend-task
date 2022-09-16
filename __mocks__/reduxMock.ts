import { useDispatch, useSelector } from 'react-redux';

// TODO: rootReducer 설정
// import { RootState } from 'src/redux/rootReducer';
// const mockRootState: RootState = {};

const mockRootState = {};

export const mockUseDispatch = useDispatch as jest.Mock;
export const mockUseSelector = useSelector as jest.Mock;

export default mockRootState;
