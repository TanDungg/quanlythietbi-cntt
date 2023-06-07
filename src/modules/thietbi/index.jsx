import Danhmucthietbi from './Danhmucthietbi';
import './style.css';
import FormSelect from './FormSelect';
import FormTitle from './FormTitle';

const Thietbi = () => {
  return (
    <div>
      <FormTitle />
      <div className="form-table">
        <FormSelect />
        <Danhmucthietbi />
      </div>
    </div>
  );
};
export default Thietbi;
