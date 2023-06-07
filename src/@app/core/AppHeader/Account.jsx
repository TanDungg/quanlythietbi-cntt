import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import '../style.css';

const Account = () => {
  return (
    <div className="header-account">
      <Avatar size="large" icon={<UserOutlined />} />
      <div className="user-name">Admin</div>
      <DownOutlined />
    </div>
  );
};

export default Account;
