import { PlusCircleOutlined, CheckSquareOutlined, ToTopOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import './style.css';

const FormTitle = () => {
  return (
    <>
      <Space className="content-title">
        <h1>DANH MỤC THÔNG TIN THIẾT BỊ</h1>
        <div className="btn-title">
          <Button className="button" type="primary" icon={<CheckSquareOutlined />} size="middle">
            Bàn giao
          </Button>
          <Button className="button" type="primary" icon={<PlusCircleOutlined />} size="middle">
            Thêm mới
          </Button>
          <Button className="button" type="primary" icon={<ToTopOutlined />} size="middle">
            Import dữ liệu
          </Button>
        </div>
      </Space>
    </>
  );
};
export default FormTitle;
