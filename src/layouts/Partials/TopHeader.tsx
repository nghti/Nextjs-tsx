import React, { Component } from 'react';
import { Dropdown, Layout, Menu, Avatar } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

import * as Styled from '@/layouts/styled';

const { Header } = Layout;

interface MyProps {
  collapsed: boolean;
  activeLeft: string;
  logOut: any;
  toggle: any;
}

export class TopHeader extends Component<MyProps> {
  render() {
    const { collapsed, activeLeft, logOut, toggle } = this.props;
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Link href="/form">
            <a>Form</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link href="/table">
            <a>Table</a>
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" onClick={logOut}>
          Logout
        </Menu.Item>
      </Menu>
    );
    return (
      <Header className={`site-layout-background ${activeLeft}`}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: toggle,
        })}
        <Styled.AntDropdown>
          <Dropdown overlay={menu} placement="bottomRight">
            <span>
              <Avatar icon={<UserOutlined />} />
              <span style={{ marginLeft: '10px' }}>Admin</span>
            </span>
          </Dropdown>
        </Styled.AntDropdown>
      </Header>
    );
  }
}

export default TopHeader;
