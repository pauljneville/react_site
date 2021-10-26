
import { db } from '../firebase.config';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, limit } from 'firebase/firestore/lite';
import FriendList from './FriendList';


const Topics = () => {

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
        setError("Server error. Sorryy 😬"); // String.fromCodePoint("0x1F480"));
      }));
    setIsPending(false);
  }




  return (
    <div className="content">
      <h2>Lali Friends</h2>

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {friends && friends.length > 0 && <FriendList friends={friends} title="Lali Friends" listId="FT" />}
    </div>
  );
}

export default Topics;