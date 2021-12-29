import { Link } from "react-router-dom";

interface IProps {
  data: any;
}

const CoinsTable: React.FC<IProps> = ({ data }) => {
  return (
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
                w-1/3
                md:w-1/5
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
                w-1/3
                md:w-1/5
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
                hidden 
                md:block
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
                hidden 
                md:block
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
                w-1/3
                md:w-1/5
              "
        >
          24%
        </div>
      </div>
      {data.map((item: any) => (
        <Link
          to={`/coin/${item.id}`}
          key={item.id}
          className="flex justify-between text-sm hover:bg-gray-800"
        >
          <div
            className="border-b border-blue-300/10 p-4 pl-8 text-gray-300 w-1/3
                md:w-1/5"
          >
            {item.name}{" "}
            <span className="uppercase font-medium">({item.symbol})</span>
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
                  w-1/3
                  md:w-1/5
                "
          >
            $ {item.current_price}
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
                  hidden 
                  md:block
                "
          >
            $ {item.high_24h}
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
                  hidden 
                  md:block
                "
          >
            $ {item.low_24h}
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
                  w-1/3
                  md:w-1/5
                "
          >
            {item.price_change_percentage_24h?.toFixed(2)} %
          </div>
        </Link>
      ))}
    </>
  );
};

export default CoinsTable;
