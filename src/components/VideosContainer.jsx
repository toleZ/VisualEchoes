const VideosContainer = ({ videos }) => {
  return (
    <>
      {videos?.map(({ id, video_files: [{ link }] }) => (
        <video
          src={link}
          key={id}
          autoPlay
          loop
          muted
          className="mb-3 w-full rounded-sm"
        />
      ))}
    </>
  );
};

export default VideosContainer;
