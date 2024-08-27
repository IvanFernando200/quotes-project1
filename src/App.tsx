import { useState } from "react";
import "./App.css";
import QuoteCard from "./components/QuoteCard";
import getRandomFromArray from "./utils/getRandomFromArray";
import quotes from "./utils/quotes.json";
import arrayForImages from "./utils/arrayForImages.json";
import Button from "./components/Button";

function App() {
  const initialValue = getRandomFromArray(quotes);
  const [quoteRandom, setQuoteRandom] = useState(initialValue);

  const initialImage = getRandomFromArray(arrayForImages);
  const [imageSelected, setImageSelected] = useState(initialImage);
  return (
    <div
      style={{
        backgroundImage: `url("/image${imageSelected}.jpg")`,
      }}
      className="app"
    >
      <h1 className="card__title">Quotes About Strength and Hope</h1>
      <div className="card">
        <Button
          setQuoteRandom={setQuoteRandom}
          setImageSelected={setImageSelected}
        />
        <QuoteCard quote={quoteRandom} />
      </div>
    </div>
  );
}

export default App;
