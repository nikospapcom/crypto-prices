interface IProps {
  data: any;
}

const CoinSidebar: React.FC<IProps> = ({ data }) => {
  return (
    <div className="p-4 bg-gray-800 rounded text-gray-400">
    <span className="text-xl font-medium">
      {data.name} Price Statistics
    </span>
    <div className="mt-2 text-sm">
      Price change percentage:
      <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
        <div>24 hours</div>
        <div className="text-white">
          {data.market_data?.price_change_percentage_24h.toFixed(2)}
          %
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
        <div>7 days</div>
        <div className="text-white">
          {data.market_data?.price_change_percentage_7d.toFixed(2)}%
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
        <div>14 days</div>
        <div className="text-white">
          {data.market_data?.price_change_percentage_14d.toFixed(2)}
          %
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
        <div>1 month</div>
        <div className="text-white">
          {data.market_data?.price_change_percentage_30d.toFixed(2)}
          %
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
        <div>2 months</div>
        <div className="text-white">
          {data.market_data?.price_change_percentage_60d.toFixed(2)}
          %
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
        <div>200 days</div>
        <div className="text-white">
          {data.market_data?.price_change_percentage_200d.toFixed(
            2
          )}
          %
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
        <div>1 year</div>
        <div className="text-white">
          {data.market_data?.price_change_percentage_1y.toFixed(2)}%
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
        <div>24 High</div>
        <div className="text-white">
          {data.market_data?.high_24h.usd.toFixed(2)}$
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
        <div>24 Low</div>
        <div className="text-white">
          {data.market_data?.low_24h.usd.toFixed(2)}$
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
        <div>ATH</div>
        <div className="text-white text-right">
          {data.market_data?.ath.usd.toFixed(2)}$ /{" "}
          <span className="block">
            {data.market_data?.ath_date.usd}
          </span>
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-300/10 pt-2 mt-2">
        <div>ATL</div>
        <div className="text-white text-right">
          {data.market_data?.atl.usd.toFixed(2)}$ /{" "}
          <span className="block">
            {data.market_data?.atl_date.usd}
          </span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CoinSidebar;
