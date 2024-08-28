import { HiOutlineRefresh } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs"
import { MdOutlineAccessTimeFilled } from "react-icons/md";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">CNAPP Dashboard</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><button>Add widget +</button></li>
         
          <li><button>
            <HiOutlineRefresh />
          </button></li>
          <li><button>
            <BsThreeDotsVertical />
          </button></li>
      
          <li> 
            <select className="select select-bordered w-full max-w-xs">
         
              <option disabled selected> <div><MdOutlineAccessTimeFilled /> | Last 2 days </div> </option>
              <option>last 1 day</option>
              <option>last 1 week</option>
            </select>
          </li>
        
        </ul>
      </div>
    </div>
  )
}

export default Navbar;