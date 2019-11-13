import React from "react";

export default function Entries({ user }) {
  return (
    <div style={{ marginLeft: "20px" }}>
      Hello, {user.name}
      <div>{user.entries} entries</div>
    </div>
  );
}
