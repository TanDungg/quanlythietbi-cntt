import AppHeader from '../AppHeader';
import AppSidebar from '../AppSidebar';
import '../style.css';

const AppLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="wrapper-left">
        <AppSidebar className="main-sidebar" />
      </div>
      <div className="wrapper-right">
        <AppHeader className="main-header" />
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
};
export default AppLayout;
