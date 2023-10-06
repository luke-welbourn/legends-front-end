import "./LegendList.scss";
import { Link } from "react-router-dom";
import { LegendType } from "../../Data/Types/Types";
import Legend from "../Legend/Legend";

type LegendListProps = {
  legends: LegendType[];
};

const LegendList = ({ legends }: LegendListProps) => {
  return (
    <>
      <div className="legend-list">
        {legends.map((legend) => (
          <Link key={legend.id} to={`/legends/${legend.id}`}>
            <Legend legend={legend} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default LegendList;
