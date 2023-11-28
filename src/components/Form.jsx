import { useState } from "react";
import Input from "./Input";
import axios from "axios";
import api from "../api/api";

export default ({ fetchUsers }) => {
  const [formData, setFormData] = useState({});

  function changeInput(e) {
    setFormData((previous) => ({
      ...previous,
      [e?.target?.id]: e?.target.value,
    }));
  }

  async function handleSubmit(e) {
    e?.preventDefault();

    try {
      await axios.post(`${api}/user`, formData);
    } catch (error) {
      console.log("ERORR:: ", error?.message);
    } finally {
      const data = await fetchUsers();
      console.log("updated data ", data);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-5 space-y-2">
        <Input onChange={changeInput} id="name" placeholder="Name" />
        <Input
          onChange={changeInput}
          id="email"
          placeholder="Email"
          type="email"
        />
        <Input
          onChange={changeInput}
          id="age"
          placeholder="Age"
          type="number"
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create
      </button>
    </form>
  );
};
