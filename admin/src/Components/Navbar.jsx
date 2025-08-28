import navlogo from '../assets/nav-logo.svg';
import navProfile from '../assets/nav_prof1.png';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-[60px] py-[15px] bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 shadow-lg sticky top-0 z-50 md:px-[30px] border-b-4 border-blue-200">
      <div className="flex items-center gap-4">
        <img
          src={navlogo}
          alt="Logo"
          className="w-[200px] md:w-[150px] h-12 object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <span className="hidden md:inline-block text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 tracking-wide ml-2">
          Admin Panel
        </span>
      </div>
      <div className="relative group">
        <img
          src={navProfile}
          alt="Profile"
          className="w-[75px] md:w-[60px] h-[75px] md:h-[60px] rounded-full object-cover border-4 border-white shadow-xl ring-2 ring-blue-300 group-hover:ring-pink-400 transition-all duration-300 cursor-pointer"
        />
        <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-white rounded-full shadow-md"></span>
        {/* Example dropdown (hidden by default, show on hover) */}
        <div className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-lg border border-blue-100 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-50">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-blue-50 text-blue-700 font-semibold cursor-pointer rounded-t-xl">Profile</li>
            <li className="px-4 py-2 hover:bg-blue-50 text-blue-700 font-semibold cursor-pointer rounded-b-xl">Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
