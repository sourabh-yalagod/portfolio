import TitleIcon from "@/utils/TitleIcon";

const Technology = () => {
  return (
    <div className="flex border p-3 pt-4 rounded-lg justify-around gap-10 flex-wrap">
      <TitleIcon name={"React"} image={"./technologies/react.png"} />
      <TitleIcon name={"Next Js"} image={"./technologies/nextjs.png"} />
      <TitleIcon name={"Java Script"} image={"./technologies/js.png"} />
      <TitleIcon name={"Tailwind CSS"} image={"./technologies/tailwind.png"} />
      <TitleIcon name={"Node Js"} image={"./technologies/node.png"} />
      <TitleIcon name={"AWS"} image={"./technologies/aws.png"} />
    </div>
  );
};

export default Technology;
