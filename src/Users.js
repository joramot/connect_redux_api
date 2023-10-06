import React from 'react';
import { useSelector } from 'react-redux';

const Users = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name.first} {user.name.last}
        </li>
      ))}
    </ul>
  );
};

export default Users;
