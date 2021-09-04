import React from 'react'
import Header from "./../landingpage/Header"

import Fun from  "./../../../asset/layout page/landingpage/asst/game.jpeg";




const LandingPage = ({heading, ...otherProps})=> {
 return(
     <div className="min-h-full  ">
         <div className=" flex flex-col">
           <Header/>
           </div> 

        <div className =" h-screen relative flex justify-center items-center h-16  bg-cover bg-fixed bg-no-repeat bg-center" 
        style= {{
            backgroundImage: `url(${Fun})`
            }}>
 {heading && <h1 className= " relative px-2.5 uppercase text-white z-10 text-xl md: text-6xl">
            {heading}
</h1>}

            </div>
     

     </div>
 )
};
LandingPage.defaultProps = {
    heading: "",
};

export default LandingPage;