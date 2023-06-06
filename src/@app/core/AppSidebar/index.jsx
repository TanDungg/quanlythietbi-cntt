import '../style.css';
import Logo from './Logo';
import SidebarMenu from './SidebarMenu';

const AppSidebar = (props) => {
  return (
    <div className={props.className}>
      <Logo className="sidebar-logo" />
      <SidebarMenu className="sidebar-menu" />
    </div>
  );
};
export default AppSidebar;
