import WebsiteHeader from '../component/websiteHeader';
import WebsiteFooter from '../component/websiteFooter';

export default function Product() {
  return (
    <div style={{width: '100vw', minWidth: '900px'}}>
      <WebsiteHeader tabName="产品优势" />
      {/* 在这里写你的中间内容部分 */}
      <p>产品优势</p>
      <WebsiteFooter />
    </div>
  )
}