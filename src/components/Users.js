import React, { useState, useEffect } from 'react';
import PostList from './PostList';

function Users() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .then((err) => console.log(err));
  };

  const onUserChange = (evt) => {
    setUserId(evt.target.value);
    console.log('onchange', evt.target.value);
  };
  return (
    <div>
      <h1>Users:</h1>
      <select id="selectUser" onChange={onUserChange}>
        <option value="select user"> select user</option>
        {console.log(users)}
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <PostList userId={userId} />
    </div>
  );
}

export default Users;
