import { Select } from 'antd';
import './style.css';

const FormSelect = () => (
  <div className="form-select">
    <div className="select-donvi">
      <label>Hệ thống:</label>
      <Select
        showSearch
        placeholder="Hệ thống"
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
        ]}
      />
    </div>
  </div>
);
export default FormSelect;
