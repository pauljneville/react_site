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
    </div>
  );
}

export default About;