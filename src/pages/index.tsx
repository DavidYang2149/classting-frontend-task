import type { NextPage } from 'next';

import AppBar from 'src/components/common/AppBar';
import CustomHead from 'src/components/common/CustomHead';
import Loading from 'src/components/common/Loading';
import StartButton from 'src/components/main/StartButton';
import useMain from 'src/hooks/main/useMain';

const Home: NextPage = () => {
  const { isLoading } = useMain();

  if (isLoading) {
    return (<Loading />);
  }

  return (
    <div>
      <CustomHead
        title="Main - Classting Quiz"
        content="Classting Quiz Main page"
      />
      <AppBar />
      <main className="main-content">
        <div className="flex flex-col items-center justify-center">
          <h1 className="main-title">완전히 새로운</h1>
          <h1 className="mb-16 main-title">클래스 퀴즈</h1>
          <StartButton />
        </div>
      </main>
    </div>
  );
};

export default Home;
