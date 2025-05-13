import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useForm } from "../context/FormContext.jsx";
import { AiOutlineDelete } from "react-icons/ai";
import { LuPencilLine } from "react-icons/lu";

const Admin = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    address: "",
    pin: "",
    phn: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const { addEntry, entries, deleteEntry, updateEntry } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing && editId) {
      updateEntry(editId, formdata);
      setIsEditing(false);
      setEditId(null);
    } else {
      addEntry(formdata);
    }
    setFormdata({ name: "", address: "", pin: "", phn: "" });
  };

  const handleEdit = (entry) => {
    setFormdata({
      name: entry.name,
      address: entry.address,
      pin: entry.pin,
      phn: entry.phn,
    });
    setEditId(entry._id);
    setIsEditing(true);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <Navbar name="Admin" />
      <form className="space-y-3 mb-6" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          className="w-full border p-2 rounded"
          required
          value={formdata.name}
          onChange={handleChange}
        />
        <input
          name="address"
          placeholder="Address"
          className="w-full border p-2 rounded"
          required
          value={formdata.address}
          onChange={handleChange}
        />
        <input
          name="pin"
          placeholder="PIN"
          className="w-full border p-2 rounded"
          required
          value={formdata.pin}
          onChange={handleChange}
        />
        <input
          name="phn"
          placeholder="Phone Number"
          className="w-full border p-2 rounded"
          required
          value={formdata.phn}
          onChange={handleChange}
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          {isEditing ? "Update" : "Add"}
        </button>
      </form>

      <div>
        <h3 className="font-semibold mb-2">Entries:</h3>
        {entries.length === 0 ? (
          <p>No data available</p>
        ) : (
          entries.map((entry) => (
            <div
              key={entry._id}
              className="border p-2 mb-2 rounded shadow flex justify-between items-start"
            >
              <div>
                <p>
                  <strong>Name:</strong> {entry.name}
                </p>
                <p>
                  <strong>Address:</strong> {entry.address}
                </p>
                <p>
                  <strong>PIN:</strong> {entry.pin}
                </p>
                <p>
                  <strong>Phone:</strong> {entry.phn}
                </p>
              </div>
              <div className="flex gap-4 text-xl">
                <button
                  className="text-blue-500"
                  onClick={() => handleEdit(entry)}
                >
                  <LuPencilLine />
                </button>
                <button
                  className="text-red-500"
                  onClick={() => deleteEntry(entry._id)}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Admin;
