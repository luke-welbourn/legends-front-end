import "../SearchBox/SearchBox.scss";
import { FormEventHandler } from "react";

type SearchBoxProps = {
  label: string;
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const SearchBox = ({ label, searchTerm, handleInput }: SearchBoxProps) => {
  return (
    <div className="search-box">
      <label htmlFor={label} className="search-box__label"></label>
      <input
        type="text"
        id={label}
        name={label}
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
        placeholder="Search Champions here..."
      />
    </div>
  );
};
export default SearchBox;
