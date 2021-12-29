import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faBitbucket
} from "@fortawesome/free-brands-svg-icons";

interface IProps {
  data: any;
}

const CoinRepos: React.FC<IProps> = ({ data }) => {
  return (
    <div className="mb-2">
      <span className="text-xs text-gray-400">Repos links: </span>
      {data.links?.repos_url?.github.map((item: any) => {
        return (
          item !== "" && (
            <a
              href={item}
              key={item}
              target="_blank"
              rel="noreferrer"
              className="inline-block mr-2"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )
        );
      })}
      {data.links?.repos_url?.bitbucket.map((item: any) => {
        return (
          item !== "" && (
            <a
              href={item}
              key={item}
              target="_blank"
              rel="noreferrer"
              className="inline-block mr-2"
            >
              <FontAwesomeIcon icon={faBitbucket} />
            </a>
          )
        );
      })}
    </div>
  );
};

export default CoinRepos;
