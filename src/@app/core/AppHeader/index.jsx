import '../style.css';
import Account from './Account';

const AppHeader = (props) => {
  return (
    <div className={props.className}>
      <div>QUẢN LÝ THIẾT BỊ CÔNG NGHỆ THÔNG TIN</div>
      <Account />
    </div>
  );
};
export default AppHeader;
