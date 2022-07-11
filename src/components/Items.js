import React from "react";

function Items(props) {

   const {fname, lname} = props;

   return (
      <div className="px-56">
         <li className="list-none py-4 px-6 flex justify-between bg-gray-100 mt-3 rounded-md" >
            <span>{fname}</span> 
            <span>{lname}</span>
            </li>
      </div>
      
   )
}

export default Items