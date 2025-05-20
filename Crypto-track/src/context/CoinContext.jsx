import { createContext, useEffect, useState } from "react";

 export const CoinContext = createContext();

 const CoinContextProvider = (props)=>{

    const [allcoin,setAllcoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    })

    const fetchAllCoin = async ()=>{
        const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': 'CG-MwkpBo6Q49xncZBy8UqcVewP	'
  }
};

fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
  .then(res => res.json())
  .then(res => setAllcoin(res))
  .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchAllCoin();
    },[currency])

    const contextValue={
            allcoin, currency, setCurrency
    }
    return (
         <CoinContext.Provider value={contextValue}>
            {props.children}
         </CoinContext.Provider>
    )
 }

 export default CoinContextProvider;