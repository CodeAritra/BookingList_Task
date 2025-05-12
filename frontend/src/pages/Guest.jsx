import React from "react";

const Guest = () => {
  const data =[
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
        <h2 className="text-xl font-bold">Welcome, Guest</h2>
        <button className="text-red-500">Logout</button>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Admin Entries:</h3>
        {data.length === 0 ? (
          <p>No data available</p>
        ) : (
          data.map((entry, index) => (
            <div key={index} className="border p-2 mb-2 rounded shadow">
              <p>{entry.name}</p>
              <p>{entry.address}</p>
              <p>{entry.pin}</p>
              <p>{entry.phone}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Guest;
