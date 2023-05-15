import htmlData from "/src/database/Books/html.json";
import Card from "../Card";
const jsonData = htmlData;
export const HtmlB = () => {
  const cardComponents = jsonData.map((item, i) => (
    //  CARD
    <Card
      key={i}
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
