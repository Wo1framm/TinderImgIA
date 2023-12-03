import { useState } from 'react';
import './App.css';

function App() {
  const [peopleYouLike, setPeopleYouLike] = useState(0);
  const [people, setPeople] = useState(
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24,
    ].sort(() => Math.random() - 0.5)
  );

  let tempPeople = [...people];

  const changePerson = () => {
    tempPeople.shift();
    setPeople(tempPeople);
    if (tempPeople.length === 0) {
      const answer = confirm('Se acabo la gente! ¿Quieres reiniciar?');
      if (answer === true) {
        location.reload();
      }
    }
  };

  const personsYouLike = () => {
    if (tempPeople.length === 0) {
      return false;
    }
    setPeopleYouLike(peopleYouLike + 1);
    changePerson();
  };

  const personsYouDontLike = () => {
    if (tempPeople.length === 0) {
      return false;
    }
    changePerson();
  };

  return (
    <>
      <div
        className="img-container"
        style={{ backgroundImage: `url('img/${people[0]}.png')` }}
      />
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
