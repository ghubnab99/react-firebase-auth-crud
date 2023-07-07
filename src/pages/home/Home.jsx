import React from 'react'
import "./home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import FeaturedChart from '../../components/featuredChart/FeaturedChart'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
            <Navbar />

            <div className="widgets">
                <Widget type="user"/>
                <Widget type="order"/>
                <Widget type="earning"/>
                <Widget type="balance"/>
            </div>

            <div className="charts">
              <FeaturedChart />
              <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
            </div>

            <div className="listContainer">
              <div className="listTitle">
                Latest Transactions
                <List />
              </div>
            </div>



        </div>
    </div>
  )
}

export default Home