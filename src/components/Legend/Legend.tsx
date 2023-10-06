import { LegendType } from "../../Data/Types/Types";
import "./Legend.scss";

type LegendProp = {
  legend: LegendType;
};

const Legend = ({ legend }: LegendProp) => {
  return (
    <div className={`legend: id ${legend.id}`}>
      <h3 className="legend_name">{legend.name}</h3>
      <p className="legend_role">{legend.role}</p>
      <p className="legend_lane">{legend.lane}</p>
      <p className="legend_releaseDate">{legend.release_date}</p>
    </div>
  );
};

export default Legend;
