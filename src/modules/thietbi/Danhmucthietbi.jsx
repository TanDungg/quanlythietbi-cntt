import { DeleteOutlined, EditTwoTone } from '@ant-design/icons';
import { Table, Space } from 'antd';
import './style.css'; // Import tệp CSS riêng

const columns = [
  {
    title: 'Full Name',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },

  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    align: 'center',
    render: () => (
      <Space>
        <EditTwoTone />
        |
        <DeleteOutlined />
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
];

const Danhmucthietbi = () => {
  return (
    <div className="custom-table">
      {' '}
      {/* Áp dụng lớp CSS tùy chỉnh cho bảng */}
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: true }} // Sử dụng thanh cuộn ngang nếu cần
      />
    </div>
  );
};

export default Danhmucthietbi;
