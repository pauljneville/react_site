
import { db } from '../../firebase.config';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, limit } from 'firebase/firestore/lite';
import FriendList from './FriendList';


import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from '../Footer';


const Friends = () => {

  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [friends, setFriends] = useState([]);


  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    const friendsCollection = query(collection(db, 'users'), limit(10));
    await getDocs(friendsCollection)
      .then(snapshot => {
        const friendsList = snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
        setFriends(friendsList)
      })
      .catch((error => {
        setError("Server error. Sorryy 😬");
      }));
    setIsPending(false);
  }


  const Helmeted = () => {
    return (
      <Helmet>
        <title>Friends | Lali's Dog Blog</title>
        <link rel="icon" href="../assets/dogblog/lalicon.ico" />
        <meta property="og:title" name="title" content="Lali's Dog Blog" />
        <meta property="og:description" name="description" content="Lali blog of recent activities" />
        <meta property="og:url" name="canonical" content="%PUBLIC_URL%/dogblog" />
        <meta property="og:image" name="image" content="../assets/dogblog/lali_bg.jpg" />
      </Helmet>
    )
  };


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
            <h2>Lali Friends</h2>

            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {friends && friends.length > 0 && <FriendList friends={friends} title="Lali Friends" listId="FT" />}
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

export default Friends;