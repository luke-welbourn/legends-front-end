import "./ShowLegends.scss";
import { LegendType } from "../../Data/Types/Types";
import { FormEvent, useState, useEffect } from "react";
import LegendList from "../../components/LegendList/LegendList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Spinner from "../../Utils/Spinner";

const ShowLegends = () => {
  const [currentList, setCurrentList] = useState<LegendType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [filteredLegends, setFilteredLegends] = useState<LegendType[]>([]);

  const getLegends = async () => {
    const response = await fetch("http://localhost:8080/legends?limit=50");
    const legendData = await response.json();
    setCurrentList(legendData);
  };

  useEffect(() => {
    getLegends();
  }, []);

  useEffect(() => {
    setFilteredLegends(currentList);
  }, [currentList]);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const lowerCaseInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(lowerCaseInput);
    const filtered = currentList.filter(
      (legend) =>
        legend.name.toLowerCase().includes(lowerCaseInput) ||
        legend.role.toLowerCase().includes(lowerCaseInput) ||
        legend.lane.toLowerCase().includes(lowerCaseInput)
    );
    setFilteredLegends(filtered);
  };

  if (!filteredLegends) return <Spinner />;

  return (
    <section>
      <h1 className="legend-list-header">I give you, your champions:</h1>
      <SearchBox
        key="SearchBox"
        label="Which champion do you seek?"
        handleInput={handleInput}
        searchTerm={searchTerm}
      />
      <LegendList legends={filteredLegends} />
    </section>
  );
};

export default ShowLegends;
