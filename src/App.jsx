import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Users from "./components/Users";
import axios from "axios";
import api from "./api/api";

export default function App() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(`${api}/user`);
    setUsers(data?.users || []);
    return data?.users;
  }

  useEffect(() => {
    (async () => {
      await fetchUsers();
    })();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Form fetchUsers={fetchUsers} />
      <br />
      <Users users={users} />
    </div>
  );
}
