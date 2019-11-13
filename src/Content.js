import React from "react";
import FaceRec from "./FaceRec";
import Register from "./Register";
import Login from "./Login";

export default function Content({
  route,
  routeChange,
  loaduser,
  user,
  incrementEntries
}) {
  switch (route) {
    case "signin":
      return <Login loaduser={loaduser} routeChange={routeChange} />;
    case "register":
      return <Register loaduser={loaduser} routeChange={routeChange} />;
    case "home":
      return (
        <FaceRec
          user={user}
          loaduser={loaduser}
          incrementEntries={incrementEntries}
        />
      );
    default:
      return <h3 style={{margin:"15px"}}>Error</h3>;
  }
}
