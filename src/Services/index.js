import axios from "axios";

export const getPlayLists = async () => {
  try {
    const res = await axios
      .get("https://tube-server.herokuapp.com/playlists")
      .then((res) => res.data);
    return res;
  } catch (error) {
    console.log("error :>> ", error);
  }
};

export const getVideosByPlayList = async (id) => {
  try {
    const res = await axios
      .get(`https://tube-server.herokuapp.com/playlists/${id}`)
      .then((res) => res.data);
    return res;
  } catch (error) {
    console.log("error :>> ", error);
  }
};

export const getVideoById = async (id) => {
  try {
    const res = await axios
      .get(`https://tube-server.herokuapp.com/video/${id}`)
      .then((res) => res.data);
    return res;
  } catch (error) {
    console.log("error :>> ", error);
  }
};
