import { Select } from 'antd';
import '../../modules/thietbi/style.css';

const SelectFirst = () => {
  return (
    <div className="select-first">
      <label className="label-select">Hệ thống:</label>
      <Select
        showSearch
        placeholder="Hệ thống"
        optionFilterProp="children"
        className="select"
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
  );
};
export default SelectFirst;
