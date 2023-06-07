import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import MenuConst from '../../../shared/constants/MenuConst';
import logo from '../../../public/img/logothaco.jpg';

const SidebarMenu = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="main-sidebar">
      <div className="sidebar-logo">
        <div onClick={toggleCollapsed} className="icon-logo">
          {collapsed ? <AppstoreOutlined /> : <AppstoreOutlined />}
        </div>
        {!collapsed && <img src={logo} alt="logo" className="logo" />}{' '}
        {/* Ẩn thẻ h1 khi collapsed là true */}
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={collapsed}
        items={MenuConst}
        className="sidebar-menu"
      />
    </div>
  );
};
export default SidebarMenu;
