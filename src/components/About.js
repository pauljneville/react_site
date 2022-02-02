import { useState } from 'react';

import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { httpsCallable } from "firebase/functions";
import { functions } from '../firebase.config';

const About = () => {
  const Helmeted = () => {
    return (
      <Helmet>
        <title>About | Lali's Dog Blog</title>
        <link rel="icon" href="../assets/dogblog/lalicon.ico" />
        <meta property="og:title" name="title" content="Lali's Dog Blog" />
        <meta property="og:description" name="description" content="Lali blog of recent activities" />
        <meta property="og:url" name="canonical" content="%PUBLIC_URL%/dogblog" />
        <meta property="og:image" name="image" content="../assets/dogblog/lali_bg.jpg" />
      </Helmet>
    )
  };

  const [hdata, setHdata] = useState(null);
  const [hsanitizedMessage, setHsanitizedMessage] = useState('');
  const [hcode, setHcode] = useState(null);
  const [hmessage, setHmessage] = useState('');
  const [hdetails, setHdetails] = useState('');
  const getBearer = httpsCallable(functions, 'timetapLocation');

  const handleCaller = () => {
    getBearer()
      .then((result) => {
        console.log(result);
        const data = result.data;
        const sanitizedMessage = data.text;
        setHdata(data);
        setHsanitizedMessage(sanitizedMessage);
      })
      .catch((error) => {
        const code = error.code;
        const message = error.message;
        const details = error.details;
        setHcode(code);
        setHmessage(message);
        setHdetails(details);
      });
  }

  const [title, setTitle] = useState('Lali');
  const [isFriend, setIsFriend] = useState(false);

  const handleClick = (name, e) => {
    setIsFriend(!isFriend);
    setTitle(!isFriend ? "Lali Friend" : "Lali");
  }

  const details = { name: "lali", age: 4 };
  return (
    <div className="dogblog">
      <Helmeted />
      {/* <div className="main-middle-column"> */}
      <div className="top-center">
        <Header />
      </div>
      <div className="middle-column">
        <div className="row-grid-wrapper">
          <div className="content">
            <h2>About {title}</h2>
            <p>Name: {details.name}</p>
            <p>Age: {details.age}</p>

            <button onClick={(e) => handleClick(title, e)}>Best Friend</button>
            <button onClick={(e) => handleCaller()}>Cloud Fun</button>

            <h3 style={{ color: "#0000ff" }}>Response</h3>
            <p>data: {hdata}</p>
            <p>sanitizedMessage: {hsanitizedMessage}</p>
            <h3 style={{ color: "#0000ff" }}>Error</h3>
            <p>code: {hcode}</p>
            <p>message: {hmessage}</p>
            <p>details: {hdetails}</p>

          </div>
          <Sidebar />
        </div >
      </div>
      <Footer />
      <div className="footer-margin"></div>
      {/* </div> */}

    </div>
  );

}

export default About;