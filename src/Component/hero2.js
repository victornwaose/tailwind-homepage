import React from 'react'

const hero2 = ({...otherProps}) => {
    return (
        <div className= "bg-black mx-auto flex justify-between">
        <div className= "  w-full  lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
          
              <img className="full" src={"/who.jpg"}  alt="who"/>
             
          </div>
          <h1 className= "m-2.5 uppercase text-yellow-200 hover:text-green-200 uppercase test-base text-xl md: text-6xl"
              >what is life without data
              </h1>
          </div>
    )
}

export default hero2
