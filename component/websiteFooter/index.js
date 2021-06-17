import Image from 'next/image';
import styles from './index.module.css';

const websiteFooter = () => {
  return (
    <div className={styles['main-container']}>
      <div className={styles['top-container']}>
        <Image
          width='180'
          height='65'
          layout='fixed'
          src='/image/logo.png'
          alt='logo'
        />
        <div className={styles['contact-container']}>
          <span>联系信息</span>
          <div className={styles['contact-item']}>
            <Image width='16' height='16' src='/image/电话@2x.png' alt='logo' />
            <span style={{ marginLeft: '.4rem' }}>0898-88886666</span>
          </div>
          <div className={styles['contact-item']}>
            <Image width='16' height='16' src='/image/邮箱@2x.png' alt='logo' />
            <span style={{ marginLeft: '.4rem' }}>hualiantianan@</span>
          </div>
          <div className={styles['contact-item']}>
            <Image width='16' height='16' src='/image/电话@2x.png' alt='logo' />
            <span style={{ marginLeft: '.4rem' }}>
              海南省三亚市XX大道XX路XX号
            </span>
          </div>
        </div>
      </div>
      <div style={{marginTop: '40px'}}>版权所有 © 海南华联天安科技有限公司</div>
      <div style={{marginTop: '10px'}}>京ICP备XXXXXXX号-2 京公网安备XXXXXXXXXXXXX号</div>
    </div>
  );
};

export default websiteFooter;
