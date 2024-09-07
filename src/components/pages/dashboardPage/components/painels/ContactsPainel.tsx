import Contact from "../Contact";

export default function Contacts() {
  return (
    <div>
      <div className="contacts-management">
        <div className="filter-row"></div>
        <div className="selected-contacts-row"></div>
        <div className="contacts-list">
          <Contact
            name="Alisson Silva"
            email="alissonbrg32@gmail.com"
            message="Lorem ipsum aisjdaoisjdoaijsdojo"
          />
        </div>
      </div>
    </div>
  );
}
