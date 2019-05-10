import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'Pro 首页',
          title: 'Pro 首页',
          href: 'https://github.com/biaochenxuying/blog-react',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: 'https://github.com/biaochenxuying/blog-react-admin',
          blankTarget: true,
        },
        {
          key: 'Blog Admin',
          title: 'Blog Admin',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> BiaoChenXuYing
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
