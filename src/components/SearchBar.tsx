/** @format */

interface ISearchBar {
  searchTerm: string | null;
  onSearch: (term: string) => void;
}
function SearchBar({searchTerm, onSearch}: ISearchBar) {
  return (
    <header>
      <input
        type="text"
        placeholder="Search by product..."
        value={searchTerm ?? ""}
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>
  );
}

export default SearchBar;
