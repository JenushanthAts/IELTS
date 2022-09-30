import React from 'react'

const DashBoardNav = () => {
    return (
        <div className='h-8 md:h-12  w-full top-0 sticky border-solid border-b-2 border-gray-150  '>
            <div className='flex mt-3 mx-2 justify-between'>

                <span className='text-2xl text-gray-700 text-opacity-50 cursor-pointer '>
                    <ion-icon name="menu" className="cursor-pointer"></ion-icon>

                </span>

                <span className='text-3xl text-gray-900 text-opacity-70 cursor-pointer '>

                    <ion-icon name="log-out"></ion-icon>

                </span>

            </div>
        </div>
    )
}

export default DashBoardNav