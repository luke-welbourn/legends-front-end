import { ChangeEvent, FormEvent, useState } from "react";
import "./CreateForm.scss";
import { LegendType } from "../../Data/Types/Types";
import { useNavigate } from "react-router-dom";

type FormProps = {
  defaultFormState: LegendType;
  formTitle: string;
  handleSubmit: (legend: LegendType) => void;
};

const CreateForm = ({
  defaultFormState,
  handleSubmit,
  formTitle,
}: FormProps) => {
  const [legend, setLegend] = useState<LegendType>(defaultFormState);

  const navigate = useNavigate();

  const handleValidation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleSubmit(legend);
    navigate("/legends");
  };

  const handleInput = (
    event: FormEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    key: string
  ) => setLegend({ ...legend, [key]: event.currentTarget.value });

  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>
        <label htmlFor="name">Name : </label>
        <input
          id="Name"
          className="form-container__input"
          type="text"
          placeholder="Name"
          value={legend.name}
          onInput={(event) => handleInput(event, "name")}
        />
        <label htmlFor="lane">Lane : </label>
        <input
          id="lane"
          className="form-container__input"
          type="text"
          placeholder="lane"
          value={legend.lane}
          onInput={(event) => handleInput(event, "lane")}
        />
        <label htmlFor="role">Role : </label>
        <input
          id="role"
          className="form-container__input"
          type="text"
          placeholder="role"
          value={legend.role}
          onInput={(event) => handleInput(event, "role")}
        />
        <label htmlFor="release_date">Release Date : </label>
        <input
          id="release_date"
          className="form-container__input"
          type="text"
          placeholder="release_date"
          value={legend.release_date}
          onInput={(event) => handleInput(event, "release_date")}
        />
        <button type="submit" className="form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
