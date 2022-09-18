import type { NextPage } from 'next';
import Link from 'next/link';

import AppBar from 'src/components/common/AppBar';
import CustomHead from 'src/components/common/CustomHead';

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
          <Link href="/question">퀴즈 풀기</Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
