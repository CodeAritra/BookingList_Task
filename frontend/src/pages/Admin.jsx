import React from "react";

const Admin = () => {
  const entries = [
    {
      id: 1,
      name: "Aritra Dhank",
      address: "Singur",
      pin: "712409",
      phone: "6545613",
    },
    {
      id: 1,
      name: "Aritra Dhank",
      address: "Singur",
      pin: "712409",
      phone: "6545613",
    },
    {
      id: 1,
      name: "Aritra Dhank",
      address: "Singur",
      pin: "712409",
      phone: "6545613",
    },
    {
      id: 1,
      name: "Aritra Dhank",
      address: "Singur",
      pin: "712409",
      phone: "6545613",
    },
    {
      id: 1,
      name: "Aritra Dhank",
      address: "Singur",
      pin: "712409",
      phone: "6545613",
    },
    {
      id: 1,
      name: "Aritra Dhank",
      address: "Singur",
      pin: "712409",
      phone: "6545613",
    },
    {
      id: 1,
      name: "Aritra Dhank",
      address: "Singur",
      pin: "712409",
      phone: "6545613",
    },
    {
      id: 1,
      name: "Aritra Dhank",
      address: "Singur",
      pin: "712409",
      phone: "6545613",
    },
    {
      id: 1,
      name: "Aritra Dhank",
      address: "Singur",
      pin: "712409",
      phone: "6545613",
    },
  ];

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Welcome, Admin</h2>
        <button className="text-red-500">Logout</button>
      </div>
      <form className="space-y-3 mb-6">
        <input
          name="name"
          placeholder="Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="address"
          placeholder="Address"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="pin"
          placeholder="PIN"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-2 rounded"
          required
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>
      <div>
        <h3 className="font-semibold mb-2">Entries:</h3>
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="border p-2 mb-2 rounded shadow flex justify-between"
          >
            <div>
              <p>{entry.name}</p>
              <p>{entry.address}</p>
              <p>{entry.pin}</p>
              <p>{entry.phone}</p>
            </div>
            <button className="text-red-500">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
