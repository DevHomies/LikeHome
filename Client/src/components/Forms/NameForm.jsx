import React from "react";

function NameForm() {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: ""
  })
  return (
    <form>
      <label>
        First name
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name
        <input
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}