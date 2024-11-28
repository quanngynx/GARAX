
import { ButtonBarInterfaces } from '../../interfaces'

function ButtonBar( bar: ButtonBarInterfaces ) {
    // const location = useLocation();
//   const path = location.pathname;
const path = ''
  return (
    <button
      className={`group w-full flex items-center p-2 mt-2 rounded-xl transition duration-300 ${
        path === bar.link
          ? "bg-black text-white "
          : "hover:bg-gray-200 hover:text-black"
      }`}
    >
      {/* <img
        // src={icon}
        alt={`${label}  Icon`}
        className={`w-[25px] h-[25px] mr-3 transition duration-300 ${
          path === link ? "brightness-0 invert" : ""
        }`}
      /> */}
      <p className="text-sm font-medium">{bar.label}</p>
    </button>
  );
}

export default ButtonBar;