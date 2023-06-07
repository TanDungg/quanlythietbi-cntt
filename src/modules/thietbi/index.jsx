import ListThietbi from './ListThietbi';
import './style.css';
import FormSelect from './FormSelect';
import FormTitle from './FormTitle';

const Thietbi = () => {
  return (
    <div>
      <FormTitle />
      <div className="form-table">
        <FormSelect />
        <ListThietbi />
      </div>
    </div>
  );
};
export default Thietbi;
