import React from 'react';
import { useParams } from 'react-router-dom';

export const BookData = [
    {
      id: 1,
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      published: 'April 10, 1925',
      description: 'The Great Gatsby is an American classic following Jay Gatsby\'s quest to win back his long-lost love by faking a successful life, depicting the struggles around love, relationships, societal standing, and consumerism of people in the “roaring” 1920s.',
      image: 'https://www.hachettebookgroup.com/wp-content/uploads/2020/06/9780762498130-3.jpg?w=640',
    },
    {
      id: 2,
      name: 'Sherlock Holmes',
      author: ' Arthur Conan Doyle',
      published: 'March 25, 1902',
      description: 'Sherlock Holmes is the world\'s only consulting detective. Money and prestige don\'t interest him, simply the chance to flex his intellectual muscles and practise his unique method of deduction are enough.',
      image: 'https://cdn2.penguin.com.au/covers/original/9780141329390.jpg',
    },
    {
      id: 3,
      name: 'Anne from green gables',
      author: 'Lucy Maud Montgomery',
      published: 'June 13, 1908',
      description: 'Anne of Green Gables recounts the adventures of Anne Shirley, an 11-year-old orphan girl, who is mistakenly sent to two middle-aged siblings, Matthew and Marilla Cuthbert, who had originally intended to adopt a boy to help them on their farm, Green Gables, in the fictional town of Avonlea in Prince Edward Island',
      image: 'https://m.media-amazon.com/images/M/MV5BNjBmYjU2YjQtNjc3NS00NmMzLTk3OWUtNDM0ZDEyOGQ4ZWI0XkEyXkFqcGdeQXVyMzU3MTc5OTE@._V1_.jpg',
    },
    {
      id: 4,
      name: 'The Little Prince',
      author: 'Antoine de Saint-Exupéry',
      published: 'April 6, 1943',
      description: 'The story follows a young prince who visits various planets, including Earth, and addresses themes of loneliness, friendship, love, and loss. Despite its style as a children\'s book, The Little Prince makes observations about life, adults, and human nature. Reynal & Hitchcock (U.S.)',
      image: 'https://m.media-amazon.com/images/I/71QKrhhMJIL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 5,
      name: 'The Headless Horseman',
      author: 'Thomas Mayne Reid',
      published: '1866',
      description: 'The Headless Horseman is a story about an Irish adventurer and hero in the War with Mexico. First Lt. Reid, writing as "Captain Reid," penned a series of popular novels and attributed his Headless Horseman idea to a south Texas folk tale.',
      image: 'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781472807984.jpg',
    },
    {
      id: 6,
      name: 'Alice in Wonderland',
      author: 'Lewis Carroll',
      published: 'November 1865',
      description: 'The story tells of a young girl who falls down a rabbit hole into a hallucinogenic world populated by talking packs of cards, and animals who look at pocket watches, smoke pipes and have tea parties. The tale was first told by Carroll to three young girls on a river boat trip in Oxford in 1862.',
      image: 'https://storage.googleapis.com/lr-assets/kids/covers/_hires_imported/9780141361345.jpg',
    },
    ];

function BookDetailsPage() {
  const { bookId } = useParams();
  const book = BookData.find((book) => book.id === parseInt(bookId));

  if (!book) {
    return <div>Книга не найдена</div>;
  }

  return (
    <div>
      <h2>{book.name}</h2>
      <p>Автор: {book.author}</p>
      <p>Год издания: {book.published}</p>
      <p>Описание: {book.description}</p>
      <img src={book.image} alt={book.name} />
    </div>
  );
}

export default BookDetailsPage;
