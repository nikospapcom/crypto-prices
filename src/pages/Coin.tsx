import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRequest } from '../utils/axiosClient';

function Coin() {
  const [coin, setCoin] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const fetchData = async () => {
    const response = await getRequest(`coins/${id}`);
    const { data } = response;
    setCoin(data)
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="header">
      {isLoading ? 'LOADING DATA' : (
        <div>
          <div className="flex justify-between py-6 mb-6 border-b border-gray-300/10">
            <div></div>
            <h1 className="text-center font-medium text-2xl">{coin.name} <img alt={coin.name} src={coin.image.small} width="25" className="inline-block" /></h1>
            <div><Link to='/'>Back</Link></div>
          </div>

          <div>
            <div>
              <span className="text-xs text-gray-400">{coin.name} Price <span className="uppercase">({coin.symbol})</span></span>
              <div className="font-bold text-2xl">$ {coin.market_data.current_price.usd}</div>
            </div>
          </div>
          <div className="text-sm text-gray-500 my-4">Description: <span dangerouslySetInnerHTML={{__html: coin.description.en}}></span></div>
        </div>
      )}
    </div>
  );
}

export default Coin;