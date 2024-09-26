import axios from "axios";
import ContactInterface from "../../../interfaces/ContactInterface";

export default function ContactCard({
  _id,
  name,
  email,
  message,
  createdAt,
  reloadComponent,
}: ContactInterface) {
  const deleteFromMongo = () => {
    axios
      .delete(
        import.meta.env.VITE_REACT_APP_BACKEND_URL + "/api/contact/" + _id
      )
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err.data.message);
      })
      .finally(() => {
        if (reloadComponent) reloadComponent();
      });
  };

  return (
    <div className="contact-wrapper">
      <div className="main-wrapper">
        <div className="sender-info">
          <h5 className="sender-name">{name}</h5>
          <h5 className="sender-email">{email}</h5>
        </div>
        <p>{message}</p>
      </div>
      <div className="details-wrapper center-everything">
        <p>
          {createdAt.replace("Z", "").split("T")[0]}
          <p>
            <br />
          </p>
          {createdAt.replace("Z", "").split("T")[1].split(".")[0]}
        </p>
      </div>
      <div className="actions-wrapper">
        <button className="dashboard-primary-button contacts-list-button">
          <img src="/images/reply-icon.png" alt="" />
        </button>
        <button
          className="dashboard-primary-button contacts-list-button"
          onClick={deleteFromMongo}
        >
          <img src="/images/read-icon.png" alt="" />
        </button>
        <button className="dashboard-primary-button contacts-list-button">
          <img src="/images/favorite-icon.png" alt="" />
        </button>
      </div>
    </div>
  );
}
