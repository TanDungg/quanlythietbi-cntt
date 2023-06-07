import { Select } from 'antd';
import './style.css';

const FormSelect = () => (
  <div>
    <label>Hệ thống:</label>
    <Select
      className="form-select"
      showSearch
      placeholder="Search to Select"
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? '').includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
      }
      options={[
        {
          value: '1',
          label: 'Not Identified',
        },
        {
          value: '2',
          label: 'Closed',
        },
        {
          value: '3',
          label: 'Communicated',
        },
        {
          value: '4',
          label: 'Identified',
        },
        {
          value: '5',
          label: 'Resolved',
        },
        {
          value: '6',
          label: 'Cancelled',
        },
      ]}
    />
  </div>
);
export default FormSelect;
