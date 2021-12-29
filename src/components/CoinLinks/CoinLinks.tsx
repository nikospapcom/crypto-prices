import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  data: any;
}

const CoinLinks: React.FC<IProps> = ({ data }) => {
  return (
    <div className="mb-2">
      <span className="text-xs text-gray-400">Contact links: </span>
      {data.links?.homepage.map((item: any) => {
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
      {data.links?.blockchain_site.map((item: any) => {
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
      {data.links?.official_forum_url.map((item: any) => {
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
  );
};

export default CoinLinks;
