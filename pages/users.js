import Link from 'next/link';
import { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'vasya' },
    { id: 2, name: 'masha' },
  ]);

  return (
    <div>
      <h1>user list</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
