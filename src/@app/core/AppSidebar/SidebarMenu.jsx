import {
  AppstoreOutlined,
  HomeOutlined,
  ToolOutlined,
  PieChartOutlined,
  BarsOutlined,
  UserOutlined,
  LaptopOutlined,
  BarChartOutlined,
  BankOutlined,
  SnippetsOutlined,
  UserSwitchOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Trang chủ', 'trang-chu', <HomeOutlined />),
  getItem('Quản lý thiết bị', 'quan-ly-thiet-bi', <PieChartOutlined />, [
    getItem('Danh mục', 'danh-muc', <BarsOutlined />),
    getItem('CBCNV', 'cbcnv', <UserOutlined />),
    getItem('Thông tin thiết bị', 'thong-tin-thiet-bi', <LaptopOutlined />),
    getItem('Kho', 'kho', <BankOutlined />),
    getItem('Báo cáo', 'bao-cao', <SnippetsOutlined />),
  ]),
  getItem('Bảo trì thiết bị', 'bao-tri-thiet-bi', <ToolOutlined />),
  getItem('Hỗ trợ người dùng', 'ho-tro-nguoi-dung', <UserSwitchOutlined />),
  getItem('Quản lý thu mua', 'quan-ly-thu-mua', <ShoppingCartOutlined />),
  getItem('Hệ thống', 'he-thong', <BarChartOutlined />),
];
const SidebarMenu = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="main-sidebar">
      <div className="sidebar-logo">
        <div onClick={toggleCollapsed} className="logo">
          {collapsed ? <AppstoreOutlined /> : <AppstoreOutlined />}
        </div>
        {!collapsed && <h1>THACO INDUSTRIES</h1>} {/* Ẩn thẻ h1 khi collapsed là true */}
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
        className="sidebar-menu"
      />
    </div>
  );
};
export default SidebarMenu;
