import cssData from "/src/database/Tools/css.json";
import Card from "../Card";
const jsonData = cssData;

export const Css = () => {
  const cardComponents = jsonData.map((item, i) => (
    //  CARD
    <Card
      key={item.id}
      title={item.title}
      link={item.link}
      description={item.description}
      i={i}
    />
  ));
  return (
    <div className="grid grid-cols-3 gap-x-12 gap-y-16  px-36 my-12">
      {cardComponents}
    </div>
  );
};
