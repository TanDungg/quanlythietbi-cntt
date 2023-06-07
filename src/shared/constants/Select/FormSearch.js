import { Input } from 'antd';
import '../../../modules/thietbi/style.css';

const { Search } = Input;
const onSearch = (value) => console.log(value);

const FormSearch = () => (
  <div className="form-search">
    <label className="label">Tìm kiếm:</label>
    <Search placeholder="Tìm kiếm" onSearch={onSearch} enterButton />
  </div>
);
export default FormSearch;
