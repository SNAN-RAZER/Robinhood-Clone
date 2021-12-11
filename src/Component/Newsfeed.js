import React from 'react'
import './NewsFeed.css'
import  {LineGraph}  from './LineGraph'
import { TimeLine } from './TimeLine'
export const Newsfeed = () => {
    return (
       <div className="newsfeed">
           <div className="newsfeed__container">
               <div className="newsfeed__chartSection">
                   <div className="newsfeed_portfolio">
                       <h1>$114,000</h1>
                       <p>+$44.63 (+0.04%) Today</p>
                   </div>
                   <div className="newsfeed__chart">
                       <LineGraph />
                       <TimeLine />
                   </div>

               </div>

               <div className="newsfeed__butying_section">
                   <h2>Buying power</h2>
                    <h2>$4.11</h2>
               </div>

               <div className="newsfeed__market__section">
                   <div className="newsfeed__market__box">
                       <p>Markets Closed</p>
                       <h1>Happy thanksgiving</h1>
                   </div>
               </div>
           </div>
       </div>
    )
}