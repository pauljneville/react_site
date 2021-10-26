import { useState } from 'react';

const About = () => {
  const [title, setTitle] = useState('Lali');
  const [isFriend, setIsFriend] = useState(false);

  const handleClick = (name, e) => {
    setIsFriend(!isFriend);
    setTitle(!isFriend ? "Lali Friend" : "Lali");
  }

  const details = { name: "lali", age: 4 };
  return (
    <div className="content">
      <h2>About {title}</h2>
      <p>Name: {details.name}</p>
      <p>Age: {details.age}</p>


      <button onClick={(e) => handleClick(title, e)}>Best Friend</button>
      <p>
        <a href='https://www.timetap.com/book/BOOKLAC4' target='_blank' rel="noreferrer"> <img src='https://www.timetap.com/buttons/Book-now-green.png' width='110' height='32' border='0' alt='Book Now' /> </a>
      </p>
      <iframe title="timetap-calender" src='https://www.timetap.com/emb/359075' style={{ overflow: "hidden" }} frameBorder='0' width='840' height='400'></iframe>
    </div>
  );
}

export default About;