import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./index.css";

import { getVideoById } from "../../Services";

const Video = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    (async () => {
      const res = await getVideoById(id);
      setVideo(res);
    })();
  }, [id]);

  return (
    <div className="video">
      <div className="px-4">
        <div className="row mt-4">
          <div className="col-xl-8">
            <div className="reponsive-ifr">
              <iframe
                className="ifr-item"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {video && (
              <div className="py-2 video-infor">
                <div className="text-left text-white ">
                  <h5 className="title">{video.title}</h5>
                  <p className="py-1">{video.publishedAt}</p>
                </div>
              </div>
            )}
          </div>
          <div className="col-xl-4"></div>
        </div>
      </div>
    </div>
  );
};
export default Video;
