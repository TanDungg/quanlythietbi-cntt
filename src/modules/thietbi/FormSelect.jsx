import SelectFirst from '../../shared/constants/SelectFirst';
import SelectSecond from '../../shared/constants/SelectSecond';
import './style.css';

const FormSelect = () => (
  <div className="form-select">
    <div className="select-row">
      <SelectFirst />
      <SelectSecond />
    </div>
  </div>
);

export default FormSelect;
