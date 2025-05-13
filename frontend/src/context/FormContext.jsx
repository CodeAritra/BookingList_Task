import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const FormContext = createContext();
export const useForm = () => useContext(FormContext);

const url = import.meta.env.VITE_URL;

const BASE_URL = `${url}api/forms`;
console.log("url = ",BASE_URL);

export const FormProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  const fetchEntries = async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      if (data.success) setEntries(data.forms);
    } catch (err) {
      console.error("Error fetching entries:", err);
    }
  };

  const addEntry = async (formData) => {
    try {
      const { data } = await axios.post(BASE_URL, formData);
      if (data.success) fetchEntries();
    } catch (err) {
      console.error("Error adding entry:", err);
    }
  };

  const deleteEntry = async (id) => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/${id}`);
      if (data.success) fetchEntries();
    } catch (err) {
      console.error("Error deleting entry:", err);
    }
  };

  // Update entry
  const updateEntry = async (id, updatedData) => {
    try {
      const { data } = await axios.put(`${BASE_URL}/${id}`, updatedData);
      if (data.success) fetchEntries();
    } catch (err) {
      console.error("Error updating entry:", err);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <FormContext.Provider
      value={{ entries, addEntry, deleteEntry, updateEntry }}
    >
      {children}
    </FormContext.Provider>
  );
};
