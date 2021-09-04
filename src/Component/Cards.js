import React from 'react'



const Cards = ({...otherProps}) => {
    return (

        <div className="flex flex-row flex-wrap py-14  justify-center">
            <div className= "w-full  lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
                <img src={"/laptop.jpg"}  alt="" className="w-full"/>
                <div className="py-2.5">
                <ol className="list-none">
                    <li className= "font-base uppercase test-base">
                        <span>title</span>
                    </li>
                    <li>
                        <span>Desc </span>
                    </li>
                </ol>
            </div>
            </div>
            <div className= "w-full  lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
                <img src={"/laptop.jpg"}  alt="" className="w-full"/>
                <div className="py-2.5">
                <ol className="list-none">
                    <li className= "font-base uppercase test-base">
                        <span>title</span>
                    </li>
                    <li>
                        <span>Desc </span>
                    </li>
                </ol>
            </div>
            </div>
            <div className= "w-full  lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
                <img src={"/laptop.jpg"}  alt="" className="w-full"/>
                <div className="py-2.5">
                <ol className="list-none">
                    <li className= "font-base uppercase test-base">
                        <span>title</span>
                    </li>
                    <li>
                        <span>Desc </span>
                    </li>
                </ol>
            </div>
            </div>
       
            <div className= "w-full  lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
                <img src={"/laptop.jpg"}  alt="" className="w-full"/>
                <div className="py-2.5">
                <ol className="list-none">
                    <li className= "font-base uppercase test-base">
                        <span>title</span>
                    </li>
                    <li className= "font-base uppercase test-base">
                        <span>Desc </span>
                    </li>
                </ol>
            </div>
            </div>
            
            <div className= "w-full  lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
                <img src={"/laptop.jpg"}  alt="" className="w-full"/>
                <div className="py-2.5">
                <ol className="list-none">
                    <li className= "font-base uppercase test-base">
                        <span>title</span>
                    </li>
                    <li className= "font-base uppercase test-base">
                        <span>Desc </span>
                    </li>
                </ol>
            </div>
            
            </div>
            
        </div>
        
    )
}


export default Cards;