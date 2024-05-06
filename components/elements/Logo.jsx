'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import IconButton from './IconButton';
import { RxHamburgerMenu } from 'react-icons/rx';

const Logo = () => {
  const { push } = useRouter();
  const onClickLogo = () => {
    // home 으로 이동하는 로직
    push('/');
  };

  const onClickMenu = () => {};
  return (
    <section className="flex flex-row items-center gap-3">
      <IconButton
        onClickIcon={onClickMenu}
        icon={<RxHamburgerMenu size={24} />}
      />
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image width={100} height={30} src={'/main-logo.svg'} alt="logo" />
      </div>
    </section>
  );
};

export default Logo;
