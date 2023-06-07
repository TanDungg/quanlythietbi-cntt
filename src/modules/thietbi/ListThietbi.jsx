import { DeleteOutlined, EditTwoTone } from '@ant-design/icons';
import { Table, Space } from 'antd';
import './style.css'; // Import tệp CSS riêng

const columns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
    fixed: 'left',
  },
  {
    title: 'Mã thiết bị',
    dataIndex: 'mathietbi',
    key: 'mathietbi',
  },
  {
    title: 'Mã QR Code',
    dataIndex: 'maqrcode',
    key: 'maqrcode',
  },
  {
    title: 'Tên thiết bị',
    dataIndex: 'tenthietbi',
    key: 'tenthietbi',
  },

  {
    title: 'Cấu hình',
    dataIndex: 'cauhinh',
    key: 'cauhinh',
  },
  {
    title: 'Hãng',
    dataIndex: 'hang',
    key: 'hang',
  },
  {
    title: 'Loại thiết bị',
    dataIndex: 'loaithietbi',
    key: 'loaithietbi',
  },
  {
    title: 'Thời gian bảo hành',
    dataIndex: 'thoigianbaohanh',
    key: 'thoigianbaohanh',
  },
  {
    title: 'Số seri',
    dataIndex: 'soseri',
    key: 'soseri',
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: 'Nhà cung cấp',
    dataIndex: 'nhacungcap',
    key: 'nhacungcap',
  },
  {
    title: 'Tình trạng',
    dataIndex: 'tinhtrang',
    key: 'tinhtrang',
  },
  {
    title: 'Chức năng',
    key: 'chucnang',
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
    stt: '1',
    mathietbi: 'TB1',
    maqrcode: '',
    tenthietbi: 'Thiết bị 1',
    cauhinh: '',
    hang: 'Dell',
    loaithietbi: 'PC',
    thoigianbaohanh: '31/12/2024',
    soseri: 123468,
    model: '',
    nhacungcap: 'Phi Long',
    tinhtrang: 'Mới',
  },
  {
    key: '2',
    stt: '1',
    mathietbi: 'TB1',
    maqrcode: '',
    tenthietbi: 'Thiết bị 1',
    cauhinh: '',
    hang: 'Dell',
    loaithietbi: 'PC',
    thoigianbaohanh: '31/12/2024',
    soseri: 123468,
    model: '',
    nhacungcap: 'Phi Long',
    tinhtrang: 'Mới',
  },
  {
    key: '2',
    stt: '1',
    mathietbi: 'TB1',
    maqrcode: '',
    tenthietbi: 'Thiết bị 1',
    cauhinh: '',
    hang: 'Dell',
    loaithietbi: 'PC',
    thoigianbaohanh: '31/12/2024',
    soseri: 123468,
    model: '',
    nhacungcap: 'Phi Long',
    tinhtrang: 'Mới',
  },
];

const ListThietbi = () => {
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

export default ListThietbi;
