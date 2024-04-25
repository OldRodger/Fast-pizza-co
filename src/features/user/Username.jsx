import React from "react";
import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((store) => store.user.username);
  if (!username) return null;
  return <h1 className="hidden text-sm font-semibold md:block">{username}</h1>;
}

export default Username;
