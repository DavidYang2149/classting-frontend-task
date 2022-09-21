import { useRootState } from 'src/redux/store';

const useMain = () => {
  const { isLoading } = useRootState((state) => (state.exam));

  return { isLoading };
};

export default useMain;
