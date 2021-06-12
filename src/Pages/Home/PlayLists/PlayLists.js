import { useEffect, useState } from "react";
import Slider from "react-slick";

import "./PlayLists.css";
import Skeleton from "@material-ui/lab/Skeleton";

import { getVideosByPlayList } from "../../../Services";
import VideoComponent from "./Video.Component";
import VideoSkeleton from "../Skeleton/VideoSkeleton.Component";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dot: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const PlayLists = ({ playlist }) => {
  const [videos, setVideos] = useState([]);
  const skeleton = [1, 2, 3, 4];
  useEffect(() => {
    (async () => {
      if (playlist.id) {
        const res = await getVideosByPlayList(playlist.id);
        setVideos(res);
      }
    })();
  }, [playlist.id]);

  return (
    <div className="playLists">
      <hr style={{ color: "gray" }} />
      <div className="playlist-title">
        {videos.length ? (
          <>
            <h4 className="px-2 py-1 text-left">{playlist.title}</h4>
            <p className="description px-2 text-left">{playlist.description}</p>
          </>
        ) : (
          <>
            <Skeleton className="mx-2" variant="text" width={250} />
            <Skeleton className="mx-2 my-1" variant="text" width={250} />
          </>
        )}
        <Slider {...settings}>
          {videos.length
            ? videos.map((item, index) => (
                <VideoComponent key={index} video={item} />
              ))
            : skeleton.map((_, index) => <VideoSkeleton key={index} />)}
        </Slider>
      </div>
    </div>
  );
};
export default PlayLists;
