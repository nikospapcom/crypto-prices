import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRequest } from '../utils/axiosClient';

function Home() {
  const [coins, setCoins] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await getRequest('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false');
    const { data } = response;
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
        <div key={item.id}><Link to={`/coin/${item.id}`}>{item.id}</Link></div>
      )))}
    </div>
  );
}

export default Home;