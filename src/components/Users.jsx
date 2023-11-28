import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../api/api";

export default function Users({ users }) {
  return (
    <div className="space-y-3">
      {users?.map((user) => (
        <div key={user?.id} className="bg-gray-200 p-4 rounded">
          <p> User: {user?.name} </p>
          <p> Email: {user?.email} </p>
          <p> Age: {user?.age} </p>
        </div>
      ))}
    </div>
  );
}
