import React, { use } from "react";
import { AuthContext } from "../../provider/AuthPRovider";

const Home = () => {
  const { user } = use(AuthContext);
  console.log(user.name);

  return <div>Home</div>;
};

export default Home;
