import { useEffect, useState } from "react";

const FormCreateMatch = ({ BASE_URL }) => {
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      date: formData.get("date"),
      time: formData.get("time"),
      locationId: location,
      teamAId: parseInt(formData.get("teamAId")),
      teamBId: parseInt(formData.get("teamBId")),
    };

    try {
      const response = await fetch(`${BASE_URL}/api/matches`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            document.cookie
              .split("; ")
              .find((row) => row.startsWith("token="))
              ?.split("=")[1]
          }`,
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response data:", errorData.message);
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log("Match created successfully:", result);
      alert("Partido creado exitosamente");
      window.location.reload();
    } catch (error) {
      alert("Error creating match");
    }
  };
  const fetchLocations = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/locations`);
      const res = await response.json();
      setLocations(res.data);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };
  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div className="w-full justify-center items-center flex flex-col mt-5">
      <p>Crear Partido</p>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 mt-4 bg-card/50 p-3 rounded-lg"
      >
        <input
          type="date"
          name="date"
          id="date"
          required
          className="bg-card p-2 rounded-lg w-full"
        />
        <input
          type="time"
          name="time"
          id="time"
          required
          className="bg-card p-2 rounded-lg w-full"
        />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full bg-card p-2 rounded-lg"
        >
          {locations.map((loc) => (
            <option key={loc.id} value={loc.id}>
              {loc.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="teamAId"
          id="teamAId"
          placeholder="Team A ID"
          required
          className="bg-card p-2 rounded-lg w-full"
        />
        <input
          type="number"
          name="teamBId"
          id="teamBId"
          placeholder="Team B ID"
          required
          className="bg-card p-2 rounded-lg"
        />
        <button type="submit" className="underline">
          Crear
        </button>
      </form>
    </div>
  );
};

export default FormCreateMatch;
