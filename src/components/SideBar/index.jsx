import {  NavLink } from "react-router-dom";

const SideBar = () => {

  const getStyles = ({ isActive }) => {
    const styles = 'flex align-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full'
    return  isActive? `text-slate-50 bg-indigo-800 ${styles}` :`hover:bg-indigo-800 hover:text-slate-50  ${styles}`;
  }
  return (<>
    <aside className="flex flex-col gap-3 border-r-2 border-gray-100 w-[240px] h-screen p-3">
      <NavLink to="/" className={getStyles}>
      <span class="material-icons-outlined">
home
</span>
<span>Home</span></NavLink>
      <NavLink to="/archive" className={getStyles}>
      <span class="material-icons-outlined">
archive
</span>
<span>Archive</span></NavLink>
      <NavLink to="/important" className={getStyles}>
      <span class="material-icons-outlined">
label_important
</span>
<span>Important</span></NavLink>
      <NavLink to="/bin" className={getStyles}>
      <span class="material-icons-outlined">
delete
</span>
<span>Bin</span></NavLink>

    </aside>
  </>);
};

export default SideBar;
