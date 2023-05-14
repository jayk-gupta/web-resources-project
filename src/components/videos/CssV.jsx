import Card from "../Card";
import cssData from "/src/database/Videos/css.json";

const jsonData = cssData;

export const CssV = () => {
  const cardComponents = jsonData.map((item, i) => (
    //  CARD
    <Card
      key={item.id}
      title={item.title}
      link={item.link}
      description={item.description}
      i={i}
      img={item.img}
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
