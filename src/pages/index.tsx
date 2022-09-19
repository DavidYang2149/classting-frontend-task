import type { NextPage } from 'next';

import AppBar from 'src/components/common/AppBar';
import CustomHead from 'src/components/common/CustomHead';
import StartButton from 'src/components/main/StartButton';

const Home: NextPage = () => {
  return (
    <div>
      <CustomHead
        title="Main - Classting Quiz"
        content="Classting Quiz Main page"
      />
      <AppBar />
      <main>
        <div>
          <StartButton />
        </div>
      </main>
    </div>
  );
};

export default Home;
