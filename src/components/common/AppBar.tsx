import Link from 'next/link';
import React from 'react';

const AppBar = () => {
  return (
    <header className="app-bar">
      <h1 className="app-bar-title">
        <Link href="/">
          RANDOM QUIZ
        </Link>
      </h1>
    </header>
  );
};

export default React.memo(AppBar);
