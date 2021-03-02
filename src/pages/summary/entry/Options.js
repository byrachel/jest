import ScoopOption from "./ScoopOption";

export default function Options() {
  const scoops = [
    {
      name: "Chocolate",
      imagePath: "images/chocolate.png",
    },
    {
      name: "Vanilla",
      imagePath: "images/vanilla.png",
    },
  ];

  const optionItems = scoops.map((item) => (
    <ScoopOption key={item.name} name={item.name} imagePath={item.imagePath} />
  ));
  return <div>{optionItems}</div>;
}
