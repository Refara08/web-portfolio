import ParalaxContainer from "./_components/paralax-container";
import ZoomParalax from "./_components/zoom-paralax";

const ZoomParalaxPage = () => {
  return (
    <ParalaxContainer className="h-[300vh] relative ">
      <ZoomParalax />
      <div className="h-[300vh] mt-[200vh] pt-[20vh] text-white flex items-start justify-center">
        Another content
      </div>
    </ParalaxContainer>
  );
};

export default ZoomParalaxPage;
