import React from "react";

import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = ({ users }) => {
  return (
    <div>
      <Card className={styles.users}>
        {users.length > 0 && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} ({user.age} years old)
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
};

export default UsersList;
