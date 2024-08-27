interface Phenomena {
  quote: Phrase;
}
interface Phrase {
  quote: string;
  author: string;
}
const PhraseCard = ({ quote: data }: Phenomena) => {
  const { quote, author } = data;
  return (
    <div>
      <blockquote>{`"${quote}"`}</blockquote>
      <cite>{author}</cite>
    </div>
  );
};

export default PhraseCard;
