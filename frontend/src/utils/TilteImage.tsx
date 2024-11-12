import Tilt from "react-parallax-tilt";
const TilteImage = ({ image }: any) => {
  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={1000}
      transitionSpeed={1000}
      glareEnable={true}
      glareMaxOpacity={0.4}
      key={Math.random()}
      scale={1.2}
      className="w-[300px] p-2 h-[300px] rounded-lg shadow-[0.1px_2px_5px_1px_black] overflow-hidden"
    >
      <div
        className="w-full rounded-xl h-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
    </Tilt>
  );
};

export default TilteImage;
