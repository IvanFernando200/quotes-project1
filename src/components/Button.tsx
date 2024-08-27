import "./styles/Button.css";
import getRandomFromArray from "../utils/getRandomFromArray";
import quotes from "../utils/quotes.json";
import arrayForImages from "../utils/arrayForImages.json";

const Button = ({ setQuoteRandom, setImageSelected }: any) => {
  const handleClick = () => {
    const quote = getRandomFromArray(quotes);
    setQuoteRandom(quote);
    const image = getRandomFromArray(arrayForImages);
    setImageSelected(image);
  };
  return (
    <button className="card__button" onClick={handleClick}>
      another
    </button>
  );
};

export default Button;
