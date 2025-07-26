import logo from '../../assets/pngegg.png';

const NavBar = () =>{
  return (
    <header className='flex p-3 gap-3 border-b-2'>
      <div className='w-12 max-h-12'>
        <img className='w-full h-full' src={logo} alt="Logo"/>
      </div>
      <h1 className='text-indigo-800 text-4xl'>NotesApp</h1>
    </header>
  )
}
export default NavBar;