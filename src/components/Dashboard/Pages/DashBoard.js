import React from 'react'
import SideBar from '../SideBar';
import DashBoardNav from '../DashBoardNav';
import FeaturedInfo from '../FeaturedInfo';
import Chart from '../Chart';
const DashBoard = () => {
    return (<>
        {/* <Main /> */}
        <div className='flex'>
            <SideBar />
            <div className='w-full '>
                <DashBoardNav />
                <FeaturedInfo />
                <Chart />
            </div>
        </div>
    </>
    )
}

export default DashBoard