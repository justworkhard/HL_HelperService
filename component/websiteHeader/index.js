import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

const websiteHeader = ({ tabName = '首页' }) => {
  return (
    <div className={styles['main-container']}>
      <Image width='180' height='65' src='/image/logo.png' alt='logo' />
      <div className={styles['tab-container']}>
        <Link href='/'>
          <a className={tabName === '首页' ? styles['tab-item-ac'] : ''}>首页</a>
        </Link>
        <Link href='/product'>
          <a className={tabName === '产品优势' ? styles['tab-item-ac'] : ''}>
            产品优势
          </a>
        </Link>
        <Link href='/serviceSupport'>
          <a className={tabName === '服务与支持' ? styles['tab-item-ac'] : ''}>
            服务与支持
          </a>
        </Link>
        <Link href='/about'>
          <a className={tabName === '关于我们' ? styles['tab-item-ac'] : ''}>
            关于我们
          </a>
        </Link>
      </div>
      <div className={styles['contact-container']}>
        <div className={styles['contact-item']}>
          <Image width='16' height='16' src='/image/电话@2x.png' alt='logo' />
          <span style={{ marginLeft: '.4rem' }}>0898-88886666</span>
        </div>
        <div className={styles['contact-item']}>
          <Image width='16' height='16' src='/image/邮箱@2x.png' alt='logo' />
          <span style={{ marginLeft: '.4rem' }}>hualiantianan@</span>
        </div>
      </div>
    </div>
  );
};

export default websiteHeader;
