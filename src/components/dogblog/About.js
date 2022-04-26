import { useState } from 'react';

import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from '../Footer';
import { httpsCallable } from "firebase/functions";
import { functions } from '../../firebase.config';

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

  const getLocationData = httpsCallable(functions, 'locationData');
  const resetBearer = httpsCallable(functions, 'bearer');

  const [locationData, setLocationData] = useState(null);
  const [locationStatus, setLocationStatus] = useState('');
  const [locationCode, setLocationCode] = useState(null);
  const [locationMessage, setLocationMessage] = useState('');
  const [locationDetails, setLocationDetails] = useState('');

  const [bearerData, setBearerData] = useState(null);
  const [bearerStatus, setBearerStatus] = useState('');
  const [bearerCode, setBearerCode] = useState(null);
  const [bearerMessage, setBearerMessage] = useState('');
  const [bearerDetails, setBearerDetails] = useState('');

  const requestNewBearer = () => {
    resetBearer()
      .then((result) => {
        setBearerData(result.data);
        setBearerStatus(result.status);
      })
      .catch((error) => {
        setBearerStatus(error.status);
        setBearerCode(error.code);
        setBearerMessage(error.message);
        setBearerDetails("error on resetBearer call");
      });
  };

  const handleCaller = () => {
    getLocationData()
      .then((result) => {
        // Success
        setLocationData(result.data);
        setLocationStatus(result.status);
      })
      .catch((error) => {
        // unauthorized, old bearer code
        // force log out then log in again
        setLocationStatus(error.status);
        setLocationCode(error.code);
        setLocationMessage(error.message);
        setLocationDetails("error on first userTester call");
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
            <button onClick={(e) => requestNewBearer()}>Reset Bearer</button>

            <h3 style={{ color: "#0000ff" }}>Location Response</h3>
            <p>data: {locationData}</p>
            <p>status: {locationStatus}</p>
            <h3 style={{ color: "#0000ff" }}>Location Error</h3>
            <p>code: {locationCode}</p>
            <p>message: {locationMessage}</p>
            <p>details: {locationDetails}</p>

            <h3 style={{ color: "#0000ff" }}>Bearer Response</h3>
            <p>data: {bearerData}</p>
            <p>status: {bearerStatus}</p>
            <h3 style={{ color: "#0000ff" }}>Bearer Error</h3>
            <p>code: {bearerCode}</p>
            <p>message: {bearerMessage}</p>
            <p>details: {bearerDetails}</p>

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


// exports.helloWorld = function helloWorld(req, res) {
    //     res.set('Access-Control-Allow-Origin', "*")
    //     res.set('Access-Control-Allow-Methods', 'GET, POST');

    //     if (req.method === "OPTIONS") {
    //       // stop preflight requests here
    //       res.status(204).send('');
    //       return;
    //     }

    //     // handle full requests
    //     res.status(200).send('weeee!);
    //   };

/**
* HTTP function that supports CORS requests.
*
* @param {Object} req Cloud Function request context.
* @param {Object} res Cloud Function response context.
*/
/*exports.corsEnabledFunction = (req, res) => {
    // Set CORS headers for preflight requests
    // Allows GETs from any origin with the Content-Type header
    // and caches preflight response for 3600s

    res.set('Access-Control-Allow-Origin', '*');

    if (req.method === 'OPTIONS') {
        // Send response to OPTIONS requests
        res.set('Access-Control-Allow-Methods', 'GET');
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.set('Access-Control-Max-Age', '3600');
        res.status(204).send('');
    } else {
        res.send('Hello World!');
    }
};*/