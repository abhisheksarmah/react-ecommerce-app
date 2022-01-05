import React from "react";
import useFetch from "../api/useFetch";

export default function UsersList() {
  const baseUrl = "https://jsonplaceholder.typicode.com/users";
  const { data, loading, erros } = useFetch(baseUrl);
  return (
    <div>
      <h1>Users list</h1>
      <div>{loading && <h3>Loading ...</h3>}</div>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
      <pre>{JSON.stringify(erros, undefined, 2)}</pre>
    </div>
  );
}
