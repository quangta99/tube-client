import Skeleton from "@material-ui/lab/Skeleton";

const PlayListSkeleton = () => {
  return (
    <div className="px-2">
      <div className="video-card">
        <div className="video-thumb video-head">
          <Skeleton variant="rect" width={300} height={160} />
        </div>
        <div className="video-body">
          <div className="w-100 py-2">
            <Skeleton variant="text" width={160} />
            <Skeleton variant="text" width={160} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlayListSkeleton;
