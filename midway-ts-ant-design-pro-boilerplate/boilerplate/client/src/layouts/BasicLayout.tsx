import ProLayout, {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
  DefaultFooter,
} from '@ant-design/pro-layout';
import React, { useEffect } from 'react';
import Link from 'umi/link';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Icon } from 'antd';
import RightContent from '@/components/GlobalHeader/RightContent';
import { ConnectState } from '@/models/connect';
import logo from '../assets/logo.png';

export interface BasicLayoutProps extends ProLayoutProps {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings;
  dispatch: Dispatch;
}
export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
};

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
  menuList.map(item => {
    const localItem = { ...item, children: item.children ? menuDataRender(item.children) : [] };
    return localItem as MenuDataItem;
  });

const defaultFooterDom = (
  <DefaultFooter
    copyright="2019 蚂蚁金服体验技术部出品"
    links={[
      {
        key: 'Ant Design Pro',
        title: 'Ant Design Pro',
        href: 'https://pro.ant.design',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <Icon type="github" />,
        href: 'https://github.com/ant-design/ant-design-pro',
        blankTarget: true,
      },
      {
        key: 'Ant Design',
        title: 'Ant Design',
        href: 'https://ant.design',
        blankTarget: true,
      },
    ]}
  />
);

const footerRender: BasicLayoutProps['footerRender'] = () => defaultFooterDom;

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const { dispatch, settings } = props;
  /**
   * constructor
   */

  useEffect(() => {
    // todo
    // if (dispatch) {
    //   dispatch({
    //     type: "user/fetchCurrent"
    //   });
    // }
  }, []);
  /**
   * init variables
   */

  const handleMenuCollapse = (payload: boolean): void => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  };

  return (
    <ProLayout
  logo={logo}
  menuHeaderRender={(logoDom, titleDom) => (
    <Link to="/">
      {logoDom}
      {titleDom}
    </Link>
  )}
  onCollapse={handleMenuCollapse}
  menuItemRender={(menuItemProps, defaultDom) => {
    if (menuItemProps.isUrl || menuItemProps.children) {
      return defaultDom;
    }

    return <Link to={menuItemProps.path}>{defaultDom}</Link>;
  }}
  breadcrumbRender={(routers = []) => [
    {
      path: "/",
      breadcrumbName: "首页"
    },
    ...routers
  ]}
  itemRender={(route, params, routes, paths) => {
    const first = routes.indexOf(route) === 0;
    return first ? (
      <Link to={paths.join("/")}>{route.breadcrumbName}</Link>
    ) : (
      <span>{route.breadcrumbName}</span>
    );
  }}
  footerRender={footerRender}
  menuDataRender={menuDataRender}
  rightContentRender={() => <RightContent />}
      {...props}
      {...settings}
  />
  );
};

export default connect(({ global, settings }: ConnectState) => ({
  collapsed: global.collapsed,
  settings,
}))(BasicLayout);
