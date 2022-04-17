import "./search.css";

const Search = () => {
  return (
    <label className="note-search m-t-xxl flex-r flex-center ">
      <i className="fa-brands fa-searchengin p-lr-s"></i>
      <input
        type="text"
        className="note-search__input"
        placeholder="search note"
      />
    </label>
  );
};

export { Search };
