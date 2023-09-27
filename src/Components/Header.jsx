import React from 'react'

function Header() {
  return (
    <div className='headerContainer'>
        <div>
            <div className='breadCrumb'>
                <p>{`Order>Order 1276DF`} </p>
            </div>
            <div className='headerOrder'>
                <p>Order 7382782RT</p>
            </div>
        </div>
        <div className='headerBtn' >
        <button className='headerBtnBack'>Back</button>
        <button className='headerBtnAprv'>Aproove Order</button>
        </div>



    </div>
  )
}

export default Header