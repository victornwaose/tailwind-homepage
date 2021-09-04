import React,{useState} from "react"
import {Link } from 'react-router-dom'

const Header = ({...otherProps})=> {
   const [active, setActive] = useState(false)
   const onClick =()=> {
        setActive(!active)

   }
    return(
     
          <header className= "relative fixed">
              <div className =" max-w-7xl mx-auto flex item-center justify-between p-2.5 ">
              <div className="w-14">
            <img  className="w-full"src={"/Tailwind.png"} alt="ys"/>
            </div>
            <div onClick={onClick} className="md:hidden uppercase">
                Menu
            </div>
        <nav className={`${!active && "hidden"} absolute flex flex-col bg-white top-full l-0  z-20 md:static md:w-auto md:flex`}> 
            <ol className="md:flex-row md:flex">
                <li  className= "list-none mr-5">
                    <Link className="flex w-full uppercase hover:text-green-200 cursor-pointer pt-2.5 px-2.5">Page</Link>
                </li>
                <li  className= "list-none  mr-5">
                    <Link className="flex w-full uppercase hover:text-green-200 cursor-pointer pt-2.5 px-2.5">About Us</Link>
                </li>
                <li  className= "list-none mr-5">
                    <Link className="flex w-full uppercase hover:text-green-200 cursor-pointer pt-2.5 px-2.5">Contact us</Link>
                </li>
            </ol>
        </nav>
        </div>
        </header>
    );
};
  export default Header;