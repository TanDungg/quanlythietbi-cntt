import {
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

const MenuConst = [
  {
    label: 'Trang chủ',
    key: 'trang-chu',
    icon: <HomeOutlined />,
  },
  {
    label: 'Quản lý thiết bị',
    key: 'quan-ly-thiet-bi',
    icon: <PieChartOutlined />,
    children: [
      {
        label: 'Danh mục',
        key: 'danh-muc',
        icon: <BarsOutlined />,
      },
      {
        label: 'CBCNV',
        key: 'cbcnv',
        icon: <UserOutlined />,
      },
      {
        label: 'Thông tin thiết bị',
        key: 'danh-muc',
        icon: <LaptopOutlined />,
      },
      {
        label: 'Kho',
        key: 'kho',
        icon: <BankOutlined />,
      },
      {
        label: 'Báo cáo',
        key: 'bao-cao',
        icon: <SnippetsOutlined />,
      },
    ],
  },
  {
    label: 'Bảo trì thiết bị',
    key: 'bao-tri-thiet-bi',
    icon: <ToolOutlined />,
  },
  {
    label: 'Hỗ trợ người dùng',
    key: 'ho-tro-nguoi-dung',
    icon: <UserSwitchOutlined />,
    children: '',
  },
  {
    label: 'Quản lý thu mua',
    key: 'quan-ly-thu-mua',
    icon: <ShoppingCartOutlined />,
    children: '',
  },
  {
    label: 'Hệ thống',
    key: 'he-thong',
    icon: <BarChartOutlined />,
    children: '',
  },
];

export default MenuConst;
