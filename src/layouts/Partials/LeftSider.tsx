import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { AppstoreOutlined, PieChartOutlined, DesktopOutlined, ContainerOutlined, MailOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { withRouter } from 'next/router'

const { Sider } = Layout
const { SubMenu } = Menu

interface MyProps {
  router: any
  collapsed: boolean
}

export class LeftSider extends Component<MyProps> {
  render() {
    const { router, collapsed } = this.props
    return (
      <Sider className="ant-sider" width="256" trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu defaultSelectedKeys={[router.pathname]} mode="inline" theme="dark">
          <Menu.Item key="/" icon={<PieChartOutlined />}>
            <Link href="/">
              <a>Dashboard</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/form" icon={<DesktopOutlined />}>
            <Link href="/form">
              <a>Form</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/table" icon={<ContainerOutlined />}>
            <Link href="/table">
              <a>Table</a>
            </Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}

export default withRouter(LeftSider)
