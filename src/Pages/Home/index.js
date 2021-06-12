import { useEffect, useState } from "react";

import "./index.css";

import { getPlayLists } from "../../Services";
import Banner from "./Banner/Banner";
import PlayLists from "./PlayLists/PlayLists";

const Home = () => {
  const [playLists, setPlayLists] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getPlayLists();
      setPlayLists(res);
    })();
  }, []);

  return (
    <div className="home">
      <Banner />
      <div className="container">
        {playLists.map((item, index) => (
          <PlayLists key={index} playlist={item} />
        ))}
      </div>
    </div>
  );
};
export default Home;
