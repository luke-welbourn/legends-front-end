import { ChangeEvent, FormEvent, useState } from "react";
import "./Form.scss";
import { LegendType } from "../../Data/Types/Types";

type FormProps = {
  defaultFormState: LegendType;
  formTitle: string;
  handleSubmit: (legend: LegendType) => void;
  handleDelete: () => void; // Define the delete function prop
};

const Form = ({
  defaultFormState,
  handleSubmit,
  handleDelete, // Add the delete function prop
  formTitle,
}: FormProps) => {
  const [legend, setLegend] = useState<LegendType>(defaultFormState);

  const handleValidation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleSubmit(legend);
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

        {defaultFormState.id && (
          <button
            type="button"
            className="form-container__button form-container__delete-button"
            onClick={handleDelete}
          >
            Delete
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
