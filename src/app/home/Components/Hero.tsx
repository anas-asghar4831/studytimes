const Hero = ({ BgURL }: { BgURL: string }) => {
  return (
    <>
      <div
        className="w-full h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${BgURL})` }}
      ></div>
    </>
  );
};

export default Hero;
