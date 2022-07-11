import React from "react";
import PropTypes from 'prop-types'

function Items(props) {

   const {fname, lname} = props;

   return (
      <ul className="px-56">
         <li className="list-none py-4 px-6 flex justify-between bg-gray-100 mt-3 rounded-md" >
            <span>{fname}</span> 
            <span>{lname}</span>
            </li>
      </ul>
      
   )
}

Items.propTypes = {
   fname: PropTypes.string.isRequired,
   lname: PropTypes.number.isRequired
}


export default Items