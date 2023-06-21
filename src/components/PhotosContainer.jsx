const Photos = ({ photos }) => {
  return (
    <>
      {photos?.map(({ id, src: { original: src }, alt }) => (
        <img src={src} alt={alt} key={id} className="mb-3 w-full rounded-sm" />
      ))}
    </>
  );
};

export default Photos;
