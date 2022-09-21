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
        <div>
          <StartButton />
        </div>
      </main>
    </div>
  );
};

export default Home;
