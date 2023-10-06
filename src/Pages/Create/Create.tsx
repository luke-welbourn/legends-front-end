import { LegendType } from "../../Data/Types/Types";
import { getLegendRequest } from "../../Utils/Requests";
import CreateForm from "../../components/CreateForm/CreateForm";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const handleCreateLegend = async (legend: LegendType) => {
    const result = await fetch(`http://localhost:8080/legend/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: getLegendRequest(legend),
    });

    if (result.ok) {
      alert("A new legend rises");
      navigate(`/legends`);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  return (
    <section className="legendParam-container">
      <p>A new champion joins the fray:</p>
      <CreateForm
        defaultFormState={{
          id: 0,
          name: "",
          lane: "",
          role: "",
          release_date: "",
        }}
        formTitle="Create Champion"
        handleSubmit={handleCreateLegend}
      />
    </section>
  );
};

export default Create;
