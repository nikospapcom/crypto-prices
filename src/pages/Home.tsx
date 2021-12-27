import { useState, useEffect } from 'react';

function Home() {
  const [coins, setCoins] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false`
    );
    const data = await res.json();
    setIsLoading(false);
    setCoins(data);
  };

  useEffect(() => {
    
    fetchData();
  }, []);


  return (
    <div className="header">
      <h1>Home</h1>
      {isLoading ? 'Loading' : (coins.map((item: any) => (
        <div key={item.id}>{item.id}</div>
      )))}
    </div>
  );
}

export default Home;