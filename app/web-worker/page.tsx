"use client";
import { usePageTitle } from "@/hook/usePageTitle";
import { User } from "@/model/randomData";
import { useEffect, useState } from "react";

const fetchData = async () => {
  const response = await fetch(
    "https://random-data-api.com/api/v2/users?size=100&is_xml=true"
  );
  const data = await response.json();
  return data;
};

const WebWorker = () => {
  usePageTitle("Web Worker");
  const [loading, setLoading] = useState(true);
  const [filteredList, setFilteredList] = useState<User[]>([]);
  const [filterTerm, setFilterTerm] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const data = await fetchData();
      setUsers([...data]);
      setLoading(false);
    };

    getUsers();
  }, []);

  useEffect(() => {
    setLoading(true);
    let worker = new Worker(new URL("./webWorker.ts", import.meta.url));
    worker.postMessage({ list: users, filterTerm: filterTerm });

    worker.onmessage = (e) => {
      console.log({ e: e.data });
      setFilteredList(e.data);
      setLoading(false);
    };

    return () => {
      worker.terminate();
    };
  }, [filterTerm]);

  const handleInputChange = (event: any) => {
    const term = event.target.value;
    setFilterTerm(term);
  };

  return (
    <div className="t-flex t-flex-col t-p-4">
      <input
        type="text"
        value={filterTerm}
        onChange={handleInputChange}
        placeholder="Enter filter term"
        className="t-p-2 "
      />
      <div className="t-overflow-auto t-h-[90vh]">
        <h1 className="t-text-2xl t-font-bold t-mb-4">
          Users Table {filteredList.length}
        </h1>
        <table className="t-w-full t-border t-border-collapse">
          <thead>
            <tr className="t-bg-gray-200">
              <th className="t-p-2 t-border">ID</th>
              <th className="t-p-2 t-border">Name</th>
              <th className="t-p-2 t-border">Username</th>
              <th className="t-p-2 t-border">Email</th>
              <th className="t-p-2 t-border">City</th>
              <th className="t-p-2 t-border">Country</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="t-p-2 t-border"> Loading...</td>
              </tr>
            ) : (
              <>
                {filteredList.map((user) => (
                  <tr key={user.id} className="t-border">
                    <td className="t-p-2 t-border">{user.id}</td>
                    <td className="t-p-2 t-border">{`${user.first_name} ${user.last_name}`}</td>
                    <td className="t-p-2 t-border">{user.username}</td>
                    <td className="t-p-2 t-border">{user.email}</td>
                    <td className="t-p-2 t-border">{user.address.city}</td>
                    <td className="t-p-2 t-border">{user.address.country}</td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WebWorker;
