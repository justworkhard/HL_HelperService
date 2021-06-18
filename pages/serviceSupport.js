import WebsiteHeader from '../component/websiteHeader';
import WebsiteFooter from '../component/websiteFooter';

export default function ServiceSupport() {
  return (
    <div style={{width: '100vw', minWidth: '900px'}}>
      <WebsiteHeader tabName="服务与支持" />
      {/* 在这里写你的中间内容部分 */}
      <p>服务与支持</p>
      <WebsiteFooter />
    </div>
  )
}