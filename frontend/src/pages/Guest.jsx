import Navbar from "../components/Navbar";
import { useForm } from "../context/FormContext.jsx";

const Guest = () => {
  const { entries } = useForm();

  return (
    <div className="p-4 max-w-xl mx-auto">
      <Navbar name="Guest" />
      <div>
        <h3 className="font-semibold mb-2">Admin Entries:</h3>
        {entries.length === 0 ? (
          <p>No data available</p>
        ) : (
          entries.map((entry, index) => (
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
