import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getRequest } from "../utils/axiosClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLink,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  FlexibleXYPlot,
  LineSeries,
  XAxis,
  YAxis
} from "react-vis";

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

  const fetchMarketChart = async () => {
    const response = await getRequest(
      `coins/${id}/market_chart?vs_currency=usd&days=1`
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
    fetchMarketChart();
  }, []);

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
                  <div className="mb-2">
                    <span className="text-xs text-gray-400">
                      Contact links:{" "}
                    </span>
                    {coin.links?.homepage.map((item: any) => {
                      return (
                        item !== "" && (
                          <a
                            href={item}
                            key={item}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block mr-2"
                          >
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        )
                      );
                    })}
                    {coin.links?.blockchain_site.map((item: any) => {
                      return (
                        item !== "" && (
                          <a
                            href={item}
                            key={item}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block mr-2"
                          >
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        )
                      );
                    })}
                    {coin.links?.official_forum_url.map((item: any) => {
                      return (
                        item !== "" && (
                          <a
                            href={item}
                            key={item}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block mr-2"
                          >
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        )
                      );
                    })}
                  </div>
                )}
              {coin.links?.facebook_username &&
                coin.links?.twitter_screen_name &&
                coin.links?.twitter_screen_name && (
                  <div className="mb-2">
                    <span className="text-xs text-gray-400">
                      Social links:{" "}
                    </span>
                    {coin.links?.facebook_username && (
                      <a
                        href={`https://www.facebook.com/${coin.links?.facebook_username}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block mr-2"
                      >
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    )}
                    {coin.links?.twitter_screen_name && (
                      <a
                        href={`https://www.twitter.com/${coin.links?.twitter_screen_name}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block mr-2"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    )}
                    {coin.links?.twitter_screen_name && (
                      <a
                        href={coin.links?.subreddit_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block mr-2"
                      >
                        <FontAwesomeIcon icon={faReddit} />
                      </a>
                    )}
                  </div>
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
                <FlexibleXYPlot
                  height={400}
                  style={{ backgroundColor: "#1F2937" }}
                  xType="time-utc"
                >
                  <YAxis
                    tickFormat={(v) => `${v.toString().slice(0, 2)}K`}
                    tickPadding={0}
                    style={{ fill: "#9CA3AF", fontSize: "12px" }}
                  ></YAxis>
                  <XAxis
                    title="Date"
                    style={{ fill: "#9CA3AF", fontSize: "12px" }}
                  ></XAxis>
                  <LineSeries
                    data={marketChart}
                    color="#3861fb"
                    style={{ fill: "none" }}
                  />
                </FlexibleXYPlot>
              </div>
              <div className="text-sm text-gray-500 my-4">
                Description:{" "}
                <span
                  dangerouslySetInnerHTML={{ __html: coin.description?.en }}
                ></span>
              </div>
            </div>
            <div className="w-1/5">
              <div className="p-4 bg-gray-800 rounded text-gray-400">
                <span className="text-xl font-medium">
                  {coin.name} Price Statistics
                </span>
                <div className="mt-2 text-sm">
                  Price change percentage:
                  <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
                    <div>24 hours</div>
                    <div className="text-white">
                      {coin.market_data?.price_change_percentage_24h.toFixed(2)}
                      %
                    </div>
                  </div>
                  <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
                    <div>7 days</div>
                    <div className="text-white">
                      {coin.market_data?.price_change_percentage_7d.toFixed(2)}%
                    </div>
                  </div>
                  <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
                    <div>14 days</div>
                    <div className="text-white">
                      {coin.market_data?.price_change_percentage_14d.toFixed(2)}
                      %
                    </div>
                  </div>
                  <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
                    <div>1 month</div>
                    <div className="text-white">
                      {coin.market_data?.price_change_percentage_30d.toFixed(2)}
                      %
                    </div>
                  </div>
                  <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
                    <div>2 months</div>
                    <div className="text-white">
                      {coin.market_data?.price_change_percentage_60d.toFixed(2)}
                      %
                    </div>
                  </div>
                  <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
                    <div>200 days</div>
                    <div className="text-white">
                      {coin.market_data?.price_change_percentage_200d.toFixed(
                        2
                      )}
                      %
                    </div>
                  </div>
                  <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
                    <div>1 year</div>
                    <div className="text-white">
                      {coin.market_data?.price_change_percentage_1y.toFixed(2)}%
                    </div>
                  </div>
                  <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
                    <div>24 High</div>
                    <div className="text-white">
                      {coin.market_data?.high_24h.usd.toFixed(2)}$
                    </div>
                  </div>
                  <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
                    <div>24 Low</div>
                    <div className="text-white">
                      {coin.market_data?.low_24h.usd.toFixed(2)}$
                    </div>
                  </div>
                  <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
                    <div>ATH</div>
                    <div className="text-white text-right">
                      {coin.market_data?.ath.usd.toFixed(2)}$ /{" "}
                      <span className="block">
                        {coin.market_data?.ath_date.usd}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
                    <div>ATL</div>
                    <div className="text-white text-right">
                      {coin.market_data?.atl.usd.toFixed(2)}$ /{" "}
                      <span className="block">
                        {coin.market_data?.atl_date.usd}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Coin;
