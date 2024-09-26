import useGetWithToken from "../../../hooks/useWithTokenReq";
import UserInterface from "../../../interfaces/UserInterface";

export default function SearchBar() {
  const { data } = useGetWithToken<UserInterface>("/api/auth/");

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
      <div className="profile-dropdown">{data?.user.username}</div>
    </div>
  );
}
