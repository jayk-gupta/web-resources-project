import jsData from "/src/database/Websites/javascript.json";
const jsonData = jsData;
import Card from "../Card";
export const Javascriptw = () => {
  const cardComponents = jsonData.map((item, i) => (
    //  CARD
    <Card
      key={i}
      title={item.title}
      link={item.link}
      description={item.description}
      img={item.img}
      i ={i}
    />
  ));
  return (
    <>
      <div className="grid grid-cols-3 gap-x-12 gap-y-16  px-36 my-12">
        {cardComponents}
      </div>
      <div className="p-4 w-full h-[20rem]"></div>
    </>
  );
};
