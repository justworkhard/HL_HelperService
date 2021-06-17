import WebsiteHeader from '../component/websiteHeader';
import WebsiteFooter from '../component/websiteFooter';

export default function Home() {
  return (
    <div style={{width: '100vw', minWidth: '900px'}}>
      <WebsiteHeader />
      <WebsiteFooter />
    </div>
  )
}
