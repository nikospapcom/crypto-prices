import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getRequest } from "../utils/axiosClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import { CoinChart, CoinSidebar, CoinSocial, CoinLinks } from "../components";

function Coin() {
  const [coin, setCoin] = useState<any>([]);
  const [marketChart, setMarketChart] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const fetchData = async () => {
    const response = await getRequest(`coins/${id}`);
    const { data } = response;
    setCoin(data);
    setIsLoading(false);
  };

  const fetchMarketChart = async (days: number | string) => {
    const response = await getRequest(
      `coins/${id}/market_chart?vs_currency=usd&days=${days}`
    );
    const { data } = response;
    let marketData = [];
    for (let i = 0; i < data.prices.length; i++) {
      marketData.push({ x: new Date(data.prices[i][0]), y: data.prices[i][1] });
    }
    setMarketChart(marketData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
    fetchMarketChart(1);
  }, []);

  const changeDateRange = (days: number | string) => {
    fetchMarketChart(days);
  };

  return (
    <div className="header">
      {isLoading ? (
        "LOADING DATA"
      ) : (
        <div>
          <div className="flex justify-between py-6 mb-6 border-b border-gray-300/10">
            <div></div>
            <h1 className="text-center font-medium text-2xl">
              {coin.name}{" "}
              <img
                alt={coin.name}
                src={coin.image?.small}
                width="25"
                className="inline-block"
              />
            </h1>
            <div>
              <Link to="/">Back</Link>
            </div>
          </div>

          <div className="flex justify-between py-6 mb-6">
            <div>
              <span className="text-xs text-gray-400">
                {coin.name} Price{" "}
                <span className="uppercase">({coin.symbol})</span>
              </span>
              <div className="font-bold text-2xl">
                $ {coin.market_data?.current_price?.usd}
              </div>
            </div>
            <div>
              {coin.links?.homepage.length &&
                coin.links?.blockchain_site.length &&
                coin.links?.official_forum_url && (
                  <CoinLinks data={coin}></CoinLinks>
                )}
              {coin.links?.facebook_username &&
                coin.links?.twitter_screen_name &&
                coin.links?.twitter_screen_name && (
                  <CoinSocial data={coin}></CoinSocial>
                )}
            </div>
          </div>
          <div className="flex justify-between pb-4">
            <div className="w-4/5 pr-8">
              <div className="text-xs text-gray-400">Repuration score</div>
              <span className="mr-2">
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className="mr-1 text-green-400"
                />
                {coin.sentiment_votes_up_percentage}
                {"%"}
              </span>
              <span className="mr-2">
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="mr-1 text-red-400"
                />
                {coin.sentiment_votes_down_percentage}
                {"%"}
              </span>
              <div className="my-4">
                <div className="mb-4">
                  <button
                    type="button"
                    className="text-xs px-2 py-1 mr-1 bg-gray-800 rounded text-gray-400"
                    onClick={() => changeDateRange(1)}
                  >
                    1D
                  </button>
                  <button
                    type="button"
                    className="text-xs px-2 py-1 mr-1 bg-gray-800 rounded text-gray-400"
                    onClick={() => changeDateRange(14)}
                  >
                    14D
                  </button>
                  <button
                    type="button"
                    className="text-xs px-2 py-1 mr-1 bg-gray-800 rounded text-gray-400"
                    onClick={() => changeDateRange(30)}
                  >
                    1Μ
                  </button>
                  <button
                    type="button"
                    className="text-xs px-2 py-1 mr-1 bg-gray-800 rounded text-gray-400"
                    onClick={() => changeDateRange(90)}
                  >
                    3Μ
                  </button>
                  <button
                    type="button"
                    className="text-xs px-2 py-1 mr-1 bg-gray-800 rounded text-gray-400"
                    onClick={() => changeDateRange(365)}
                  >
                    1Υ
                  </button>
                  <button
                    type="button"
                    className="text-xs px-2 py-1 mr-1 bg-gray-800 rounded text-gray-400"
                    onClick={() => changeDateRange("max")}
                  >
                    MAX
                  </button>
                </div>
                <CoinChart data={marketChart}></CoinChart>
              </div>
              <div className="text-sm text-gray-500 my-4">
                Description:{" "}
                <span
                  dangerouslySetInnerHTML={{ __html: coin.description?.en }}
                ></span>
              </div>
            </div>
            <div className="w-1/5">
              <CoinSidebar data={coin}></CoinSidebar>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Coin;
