import { useState, useEffect } from "react";
import { getRequest } from "../utils/axiosClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { CoinsTable } from "../components";

function Home() {
  const [coins, setCoins] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const fetchData = async () => {
      const response = await getRequest(
        `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false&page=${page}`
      );
      const { data } = response;
      setIsLoading(false);
      setCoins(data);
    };

    fetchData();
  }, [page]);

  const nextPage = async () => {
    let currentPage = page;
    setPage(++currentPage);
    setIsLoading(true);
  };

  const prevPage = async () => {
    let currentPage = page;
    setPage(--currentPage);
    setIsLoading(true);
  };

  const Skeleton = () => {
    return (
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
    );
  };

  return (
    <div>
      <h1 className="text-center py-6 mb-6 font-medium text-2xl border-b border-gray-300/10">
        Cryptocurrency Prices
      </h1>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <CoinsTable data={coins}></CoinsTable>
          <div className="flex justify-center py-8">
            <button
              type="button"
              className="text-sm px-2 py-1 mr-1 bg-gray-800 rounded text-gray-400"
              onClick={() => prevPage()}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              type="button"
              className="text-sm px-2 py-1 mr-1 bg-gray-800 rounded text-gray-400"
              onClick={() => nextPage()}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
