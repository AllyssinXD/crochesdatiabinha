import useGetWithToken from "../../../hooks/useWithTokenReq";
import UserInterface from "../../../interfaces/UserInterface";
import Dropdown from "./Dropdown";

export default function SearchBar() {
  const { data } = useGetWithToken<UserInterface>("/api/auth/");

  const profilePicUrl = data?.user.profilePicUrl
    ? data?.user.profilePicUrl
    : "/images/admins-icon.png";

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
      <Dropdown pfpUrl={profilePicUrl} />
    </div>
  );
}
