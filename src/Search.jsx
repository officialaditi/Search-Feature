import { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";

const Search = () => {
  const [search, setSearch] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch("https://dummyapi.online/api/users");
    const store = await res.json();
    setSearch(store);
    console.log(store);
  };

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <h1 className="heading">Search Functionality</h1>
      <input
        type="text"
        placeholder="Search user..."
        onChange={(e) => setInputText(e.target.value)}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="main-card">
          {search
            .filter((person) => {
              return inputText.toLowerCase() === ""
                ? person
                : person.name.toLowerCase().includes(inputText);
            })
            .map((person) => {
              return <Card key={person.id} person={person} />;
            })}
        </div>
      )}
    </>
  );
};
export default Search;
