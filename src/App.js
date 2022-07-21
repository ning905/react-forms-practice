import { useState } from "react";
import "./App.css";

const initialData = {
  name: "",
  address: "",
  phone: "",
  email: "",
  complaint: "",
  contact: "",
  consent: false,
};

export default function App() {
  const [userData, setUserData] = useState(initialData);

  function handleInput(event) {
    const { name, type } = event.target;
    let value = event.target.value;

    if (type === "checkbox") {
      value = event.target.checked;
    }
    setUserData({ ...userData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("userData", userData);

    setUserData(initialData);
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInput}
              required
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleInput}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={userData.phone}
              onChange={handleInput}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInput}
            />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              value={userData.complaint}
              onChange={handleInput}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                checked={userData.contact === "phone"}
                onChange={handleInput}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                checked={userData.contact === "email"}
                onChange={handleInput}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                checked={userData.contact === "post"}
                onChange={handleInput}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                checked={userData.contact === "none"}
                onChange={handleInput}
              />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={userData.consent}
              onChange={handleInput}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
