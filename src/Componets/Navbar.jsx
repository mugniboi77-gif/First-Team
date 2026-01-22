import './Navbar.css'
import { FiSearch } from "react-icons/fi"
import { VscSettings } from "react-icons/vsc";
import { IoHeart } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import img1 from "../assets/image.png"

export const Navbar = () => {
  return (
    <header>
        <nav>
            <div className="navbar1">
                <h1>MORENT</h1>
                <button>                    
                    <a className='a1'><FiSearch /></a>
                    Search something here
                    <a className='a2'><VscSettings /></a>
                </button>
            </div>
            <div className="navbar2">
                <div className='a3'>
                    <a className='a1'><IoHeart /></a>
                    <a className='a1'><IoNotifications /></a>
                    <a className='a1'><IoMdSettings /></a>
                </div>
                <img src={img1} alt="" />


            </div>
        </nav>
    </header>
  )
}
