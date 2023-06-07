import FormSearch from '../../shared/constants/Select/FormSearch';
import SelectFirst from '../../shared/constants/Select/SelectFirst';
import SelectSecond from '../../shared/constants/Select/SelectSecond';
import './style.css';

const FormSelect = () => (
  <div className="select-row">
    <SelectFirst />
    <SelectSecond />
    <FormSearch />
  </div>
);

export default FormSelect;
