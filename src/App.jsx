import { useState } from 'react';
import './App.css';

function App() {
  let peopleYouLike = 0;
  const [imgContainer, setImgContainer] = useState('');
  const people = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  const mixArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  mixArray(people);

  const changePerson = () => {
    mixArray(people);
    imgContainer(
      (setImgContainer.style.backgroundImage = `url('img/${people[0]}.png')`)
    );
    if (people.length === 0) {
      const answer = confirm('Se acabo la gente! ¿Quieres reiniciar?');
      if (answer === true) {
        location.reload();
      }
    }
  };

  const personsYouLike = () => {
    if (people.length === 0) {
      return false;
    }
    peopleYouLike++;
    people.shift();
    changePerson();
  };

  const personsYouDontLike = () => {
    if (people.length === 0) {
      return false;
    }
    people.shift();
    changePerson();
  };

  return (
    <>
      <div className="img-container"></div>
      <div className="container-buttom">
        <input
          type="button"
          value="Me gusta"
          className="si"
          onClick={personsYouLike}
        />
        <input
          type="button"
          value="No me gusta"
          className="no"
          onClick={personsYouDontLike}
        />
      </div>
      <div className="Te-gustan">
        Te gustan <b>{peopleYouLike}</b> personas
      </div>
    </>
  );
}

export default App;
