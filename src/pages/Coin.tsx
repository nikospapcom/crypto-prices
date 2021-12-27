import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRequest } from '../utils/axiosClient';

function Coin() {
  const [coin, setCoin] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  let { id } = useParams();

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
        <div>{coin.name}</div>
      )}
    </div>
  );
}

export default Coin;