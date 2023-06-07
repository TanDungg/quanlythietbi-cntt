import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Space } from 'antd';
import '../style.css';

const items = [
  {
    label: <a href="https://www.antgroup.com">Thông tin cá nhân</a>,
    key: 'thong-tin-ca-nhan',
  },
  {
    type: 'divider',
  },
  {
    label: <a href="https://www.antgroup.com">Đăng xuất</a>,
    key: 'dang-xuat',
  },
];
const Account = () => {
  return (
    <div className="header-account">
      <Dropdown
        menu={{
          items,
          className: 'account-item',
        }}
        trigger={['click']}
      >
        <Space>
          <Avatar size="large" icon={<UserOutlined />} />
          <div className="user-name">Admin</div>
          <DownOutlined onClick={(e) => e.preventDefault()} />
        </Space>
      </Dropdown>
    </div>
  );
};

export default Account;
