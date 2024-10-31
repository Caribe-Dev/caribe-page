import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { useEffect, useCallback, useState } from 'react';

import { Layout } from '@/components/Layout';
import { Menu } from '@/components/Menu';
import { Icon } from '@/components/Icon';

const MAX_SCROLL = 30;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const _scrollTop = e.target.documentElement.scrollTop;
      if (_scrollTop > MAX_SCROLL) {
        setScrollTop(true);
        return;
      }

      setScrollTop(false);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  const handleMenu = useCallback((e) => {
    e.preventDefault();
    setOpen((open) => !open);
  }, []);

  return (
    <header className={classNames('fixed z-40 w-full h', { 'h-16': !open, 'h-screen': open, 'bg-green-300': open })}>
      <div
        className={classNames('relative h-full after:content-[""] after:transition-all after:absolute after:top-0 after:w-full after:bg-green-300', {
          'after:h-[0px]': !scrollTop,
          'after:h-full': scrollTop,
          'after:md:h-full': scrollTop,
        })}
      >
        <Layout className="relative z-10 flex flex-wrap md:flex-nowrap md:items-center">
          <div className="flex basis-full justify-between h-[70px] items-center">
            <Link href="/">
              <Image src="/images/caribe-dev-logo.svg" alt="Caribe Dev logo" width={120} height={40} />
            </Link>
            <a
              href="#"
              onClick={handleMenu}
              className="flex items-center p-1 text-sm md:hidden hover:opacity-90 focus:outline-none"
              aria-expanded={open}
            >
              <span className="sr-only">Open main menu</span>
              <Icon icon="hamburger" className="fill-secondary" width={25} height={25} />
            </a>
          </div>
          <Menu isOpen={open} setOpen={setOpen} className="flex-col justify-center py-4 md:flex-row md:justify-start md:py-0" />
        </Layout>
      </div>
    </header>
  );
}
