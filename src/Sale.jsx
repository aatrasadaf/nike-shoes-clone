import React from 'react'

function Sale() {
  return (
    <>
    <section>
      <div className='flex flex-wrap'>
         <aside className='w-1/4 border-1 border-red-600'> 
            Sidebar
        </aside>
        <div className='w-3/4 border-1 border-blue-600'>
            Products
        </div>
      
      </div>
       
    </section>
    </>
  )
}

export default Sale