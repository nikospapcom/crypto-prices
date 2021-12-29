import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";

interface IProps {
  data: any;
}

const CoinSocial: React.FC<IProps> = ({ data }) => {
  return (
    <div className="mb-2">
      <span className="text-xs text-gray-400">Social links: </span>
      {data.links?.facebook_username && (
        <a
          href={`https://www.facebook.com/${data.links?.facebook_username}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block mr-2"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      )}
      {data.links?.twitter_screen_name && (
        <a
          href={`https://www.twitter.com/${data.links?.twitter_screen_name}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block mr-2"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      )}
      {data.links?.twitter_screen_name && (
        <a
          href={data.links?.subreddit_url}
          target="_blank"
          rel="noreferrer"
          className="inline-block mr-2"
        >
          <FontAwesomeIcon icon={faReddit} />
        </a>
      )}
    </div>
  );
};

export default CoinSocial;
