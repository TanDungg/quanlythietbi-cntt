import '../style.css';
import SidebarMenu from './SidebarMenu';

const AppSidebar = (props) => {
  return (
    <div className={props.className}>
      <SidebarMenu className="sidebar-menu" />
    </div>
  );
};
export default AppSidebar;
