export default function SearchBar() {
  return (
    <div className="fixed-dashboard-header space-between">
      <div className="search-bar-wrapper">
        <img src="" className="search-icon" />
        <input
          className="search-text-input"
          type="text"
          name="pesquisar"
          placeholder="Procurar"
        />
      </div>
      <div className="profile-dropdown"></div>
    </div>
  );
}
