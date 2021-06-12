import { Link } from "react-router-dom";

const VideoComponent = ({ video }) => {
  return (
    <Link
      style={{ textDecoration: "none", color: "white" }}
      to={`/video/${video.id}`}
    >
      <div className="px-2">
        <div className="video-card">
          <div className="video-thumb video-head">
            <img
              className="img-fluid"
              src={video.thumbnails?.medium.url}
              alt="Vid"
            />
          </div>
          <div className="video-body">
            <div className="w-100 py-2">
              <h6 className="video-name">{video.title}</h6>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default VideoComponent;
