import React from 'react'

function From() {
  return (
    <div>
      <form>
         <div className=" max-w-fit p-4 flex flex-col items-start gap-4 mx-auto rounded-lg " >
            <label>name</label>
            <input type="text" placeholder="name" className="p-2 border focus:outline-none" />
         </div>

           <div className=" max-w-fit p-4 flex flex-col items-start gap-4 mx-auto rounded-lg " >
            <label>lastname</label>
            <input type="text" placeholder="name" className="p-2 border focus:outline-none" />
         </div>

         <button type="submit" className="px-4 py-2 bg-green-300 rounded-md mt-4 mb-10" >เพิ่มข้อมูล</button>

      </form>
    </div>
  )
}

export default From