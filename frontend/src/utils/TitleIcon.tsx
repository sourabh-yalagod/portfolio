import Tilt from "react-parallax-tilt";
const TitleIcon = ({ image, name }: any) => {
  return (
    <div className="grid gap-2 place-items-center">
      <Tilt
        tiltMaxAngleX={50}
        tiltMaxAngleY={50}
        perspective={1000}
        transitionSpeed={5000}
        glareEnable={true}
        glareMaxOpacity={0.9}
        key={Math.random()}
        scale={1.2}
        className="bg-white cursor-pointer p-1 size-8 sm:size-12 md:size-16 rounded-full shadow-[0.1px_2px_5px_1px_black] overflow-hidden"
      >
        <div
          className="w-full rounded-full h-full bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </Tilt>
      <h1 className="font-semibold text-[10px] sm:text-[15px] md:text-[16px]">
        {name}
      </h1>
    </div>
  );
};

export default TitleIcon;
