import axios from 'axios';
import React,{useState,useEffect} from 'react'
import './Stats.css';
import {StatsRow} from './StatsRow';
import {db} from './Firebase'


export const Stats = () => {
  
const TOKEN ='c6nkqvqad3ibe15jb2b0';
const BASE_URL='https://finnhub.io/api/v1/quote'
const [StockData, setStockData] = useState([]);
    const [myStocks,setMyStocks] = useState([]);
   
    const getStockData=(stockName)=>{
    return axios.get(`${BASE_URL}?symbol=${stockName}&token=${TOKEN}`)
    .catch(error=>{
        console.log('Error',error.message);
    })

    
   }

    

    const getMyStocks = () => {
       
        db
        .collection('myStocks')
        .onSnapshot(snapshot => {
            let promises = [];
            let tempData = []
            snapshot.docs.map((doc) => {
               
              promises.push(getStockData(doc.data().ticker)
              .then(res => {
                tempData.push({
                  id: doc.id,
                  data: doc.data(),
                  info: res.data
                })
              })
            )})
            Promise.all(promises).then(()=>{
               
              setMyStocks(tempData);
              console.log(myStocks)
            })
        })
      }

    useEffect(()=>{
        let stocksData=[];
        const stocksList=['AAPL','MSFT','TSLA','FB','BABA','DIS','UBER'];
        getMyStocks();

        let promises=[];
        stocksList.map((stock)=>{
            promises.push(
                getStockData(stock)
                .then((res)=>{
                    stocksData.push({
                        name:stock,
                        ...res.data
                    })
                })
            )
            
        });
        Promise.all(promises).then(()=>{
            setStockData(stocksData);
            
        })
        
        
    },[])
    
    return (
        <div className="stats">
            <div className="stats__container">
            <div className="stats__header">
                <p>Stocks</p>
            </div>
            <div className="stats__content">
                <div className="stats__rows">
                    {

                            // StockData.map((stock)=>(
                            //     <StatsRow 
                            //     key={stock.name}
                            //     name={stock.name}
                            //     openPrice={stock.o}
                            //     price={stock.c}
                                
                            //     />
                            // )
                                
                            
                            //     )


                            myStocks.map((stock) => (
                                <StatsRow
                                  key={stock.data.ticker}
                                  name={stock.data.ticker}
                                  openPrice={stock.info.o}
                                  volume={stock.data.shares}
                                  price={stock.info.c}
                                />
                              ))
                            
                    }

{/* for our current stocks */}
                </div>
               
            </div>
            <div className="stats__header stats__lists">
                <p>Lists</p>
            </div>

            <div className="stats__content">
          <div className="stats__rows">
            {StockData.map((stock) => (
              <StatsRow
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}
                
              />
            ))}
          </div>
        </div>
            </div>

        </div>
    )
}
