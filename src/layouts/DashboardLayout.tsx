import React from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';

import * as Styled from '@/layouts/styled';
import { TopHeader, LeftSider, BreadCrumb } from '@/layouts/Partials';
import { logoutRequest } from '@/redux/actions';

const { Content } = Layout;

interface MyProps {
  logoutRequest?: any;
  children: React.ReactElement;
}

interface MyState {
  collapsed: boolean;
  activeLeft: string;
}

class DashboardLayout extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapsed: false,
      activeLeft: '',
    };
    this.logOut = this.logOut.bind(this);
  }

  toggle = () => {
    let showWidth: any = '';
    showWidth = document.getElementsByClassName('ant-sider')[0].clientWidth;

    if (showWidth === 256) {
      this.setState({
        activeLeft: 'active-left',
      });
    } else {
      this.setState({
        activeLeft: '',
      });
    }

    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  logOut() {
    const { logoutRequest } = this.props;
    logoutRequest();
  }

  render() {
    return (
      <Styled.ContainerDiv>
        <Layout>
          <LeftSider collapsed={this.state.collapsed} location="" />
          <Layout className="site-layout">
            <TopHeader
              collapsed={this.state.collapsed}
              activeLeft={this.state.activeLeft}
              toggle={this.toggle}
              logOut={this.logOut}
            />
            <div className="side-wrap">
              <BreadCrumb />
              <Content className="site-content">{this.props.children}</Content>
            </div>
          </Layout>
        </Layout>
      </Styled.ContainerDiv>
    );
  }
}

export default connect(null, { logoutRequest })(DashboardLayout);
