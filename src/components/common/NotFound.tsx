/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="not-found-content" role="status">
      <div className="flex flex-col items-center">
        <Image
          src="/404.svg"
          alt="not-found"
          width={600}
          height={600}
        />
        <Link href="/">
          <a className="not-found-button">메인으로 돌아가기</a>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(NotFound);
