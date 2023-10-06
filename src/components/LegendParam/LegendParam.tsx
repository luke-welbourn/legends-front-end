import "./LegendParam.scss";
import { useParams } from "react-router-dom";
import { LegendType } from "../../Data/Types/Types";
import Legend from "../Legend/Legend";
import { getLegendRequest } from "../../Utils/Requests";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import { useState, useEffect } from "react";

type LegendParamProps = {
  legend: LegendType[];
};

const LegendParam = ({ legend }: LegendParamProps) => {
  const navigate = useNavigate();

  const checkSearchParam = useParams().id;
  const searchParam = checkSearchParam ? parseInt(checkSearchParam) : undefined;

  const legendParam = legend.find((legend) => legend.id === searchParam);

  const [currentLegend, setCurrentLegend] = useState<LegendType>({
    id: 0,
    name: "",
    lane: "",
    role: "",
    release_date: "",
  });

  const handleUpdateLegend = async (legend: LegendType) => {
    const result = await fetch(`http://localhost:8080/legend/${searchParam}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: getLegendRequest(legend),
    });

    if (result.ok) {
      alert("Legend reborn");
      navigate(`/legends`);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleDeleteLegend = async () => {
    const result = await fetch(`http://localhost:8080/legend/${searchParam}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      alert("Legend eliminated");
      navigate("/legends");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const getFormLegend = (legend: LegendType) => {
    return {
      id: legend.id,
      name: legend.name,
      lane: legend.lane,
      role: legend.role,
      release_date: legend.release_date,
    };
  };

  if (legendParam === undefined) {
    return (
      <p className="legendParam-error">
        That champion does not exist ... <br></br> If it doesn't exist try
        making it on the create a champion page
      </p>
    );
  }

  useEffect(() => {
    setCurrentLegend(legendParam || {});
  }, []);

  const formLegend: LegendType = getFormLegend(currentLegend);

  return (
    <section className="legendParam-container">
      <section className="legendParam-legend">
        <p>You have chosen your champion:</p>
        <Legend legend={legendParam} />
      </section>

      <Form
        defaultFormState={formLegend}
        formTitle="Update Champion"
        handleSubmit={handleUpdateLegend}
        handleDelete={handleDeleteLegend}
      />
    </section>
  );
};

export default LegendParam;
