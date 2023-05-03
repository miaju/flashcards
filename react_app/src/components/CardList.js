import CardItem from "./CardItem";

export default function CardList(props) {
  let cards = [];

  if (props.cards !== undefined) {
    cards = props.cards.map((card) => {
      return(
        <CardItem
          front={card.front}
          back={card.back}
        />
      );
    })
  }

  return (
    <ul>
      {cards}
    </ul>
  );
};