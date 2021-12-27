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

  const Skeleton = () => {
    return(
      <div className="border border-blue-300/10 shadow rounded-md p-4 w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-4 bg-gray-700 rounded"></div>
            <div className="space-y-3">
              <div className="h-2 bg-gray-700 rounded"></div>
              <div className="h-2 bg-gray-700 rounded"></div>
              <div className="h-2 bg-gray-700 rounded"></div>
              <div className="h-2 bg-gray-700 rounded"></div>
              <div className="h-2 bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div>
      <h1 className="text-center py-6 mb-6 font-medium text-2xl border-b border-gray-300/10">Cryptocurrency Prices</h1>
      {isLoading ? <Skeleton /> : (
        <>
          <div className="flex justify-between text-xs">
            <div
              className="
                border-b
                border-blue-300/10
                font-medium
                p-4
                pl-8
                pt-4
                pb-3
                text-gray-400 text-left
                w-1/5
              "
            >
              Name
            </div>
            <div
              className="
                border-b
                border-blue-300/10
                font-medium
                p-4
                pl-4
                pt-4
                pb-3
                text-gray-400 text-left
                w-1/5
              "
            >
              Price
            </div>
            <div
              className="
                border-b
                border-blue-300/10
                font-medium
                p-4
                pl-4
                pt-4
                pb-3
                text-gray-400 text-left
                w-1/5
              "
            >
              Highest price
            </div>
            <div
              className="
                border-b
                border-blue-300/10
                font-medium
                p-4
                pl-4
                pt-4
                pb-3
                text-gray-400 text-left
                w-1/5
              "
            >
              Lower price
            </div>
            <div
              className="
                border-b
                border-blue-300/10
                font-medium
                p-4
                pr-8
                pt-4
                pb-3
                text-gray-400 text-left
                w-1/5
              "
            >
              24%
            </div>
          </div>
          {coins.map((item: any) => (
            <Link 
              to={`/coin/${item.id}`} 
              key={item.id}
              className="flex justify-between text-sm hover:bg-gray-800"
            >
              <div
                className="border-b border-blue-300/10 p-4 pl-8 text-gray-300 w-1/5"
              >
                {item.name} <span className="uppercase font-medium">({item.symbol})</span>
              </div>
              <div
                className="
                  border-b
                  border-blue-300/10
                  font-medium
                  p-4
                  pl-4
                  pt-4
                  pb-3
                  text-gray-400 text-left
                  w-1/5
                "
              >
                $ {item.current_price?.toFixed(2)}
              </div>
              <div
                className="
                  border-b
                  border-blue-300/10
                  font-medium
                  p-4
                  pl-4
                  pt-4
                  pb-3
                  text-gray-400 text-left
                  w-1/5
                "
              >
                $ {item.high_24h?.toFixed(2)}
              </div>
              <div
                className="
                  border-b
                  border-blue-300/10
                  font-medium
                  p-4
                  pl-4
                  pt-4
                  pb-3
                  text-gray-400 text-left
                  w-1/5
                "
              >
                $ {item.low_24h?.toFixed(2)}
              </div>
              <div
                className="
                  border-b
                  border-blue-300/10
                  font-medium
                  p-4
                  pr-8
                  pt-4
                  pb-3
                  text-gray-400 text-left
                  w-1/5
                "
              >
                {item.price_change_percentage_24h?.toFixed(2)} %
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
}

export default Home;