import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
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
  getItem('Danh mục', 'danh-muc', <SettingOutlined />, [
    getItem('Bộ phận', 'bo-phan'),
    getItem('Đơn vị', 'don-vi'),
    getItem('Thiết bị', 'thiet-bi'),
    getItem('Phòng ban', 'phong-ban'),
  ]),
];
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const SidebarMenu = (props) => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      className="sidebar-menu"
      style={{
        textAlign: 'left',
      }}
      items={items}
    />
  );
};
export default SidebarMenu;
