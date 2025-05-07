import React, { useState } from "react";
import "./App.css";

const dummyData = [
  { id: 1, name: "Sunrise PG", rent: 4500, location: "Delhi", available: true },
  { id: 2, name: "Comfort Stay", rent: 8000, location: "Mumbai", available: false },
  { id: 3, name: "City Lights PG", rent: 12000, location: "Bangalore", available: true },
  { id: 4, name: "Green Nest", rent: 9500, location: "Pune", available: true },
  { id: 5, name: "Skyline PG", rent: 10500, location: "Chennai", available: false },
  { id: 6, name: "Cozy Corner", rent: 4000, location: "Kolkata", available: true }
];

function Home() {
  const [rentFilter, setRentFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState(false);
  const [page, setPage] = useState(1);
  const listingsPerPage = 4;

  const filteredData = dummyData.filter((item) => {
    const matchesRent =
      rentFilter === "" ||
      (rentFilter === "below5000" && item.rent < 5000) ||
      (rentFilter === "5000to10000" && item.rent >= 5000 && item.rent <= 10000) ||
      (rentFilter === "above10000" && item.rent > 10000);

    const matchesLocation =
      locationFilter === "" || item.location.toLowerCase().includes(locationFilter.toLowerCase());

    const matchesAvailability = !availabilityFilter || item.available;

    return matchesRent && matchesLocation && matchesAvailability;
  });

  const paginatedData = filteredData.slice((page - 1) * listingsPerPage, page * listingsPerPage);
  const totalPages = Math.ceil(filteredData.length / listingsPerPage);

  return (
    <div className="App">
      <header className="header">PG Listing Portal</header>

      <div className="filters">
        <select value={rentFilter} onChange={(e) => setRentFilter(e.target.value)}>
          <option value="">All Rents</option>
          <option value="below5000">Below ₹5000</option>
          <option value="5000to10000">₹5000 - ₹10,000</option>
          <option value="above10000">Above ₹10,000</option>
        </select>

        <input
          type="text"
          placeholder="Enter location"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />

        <label>
          <input
            type="checkbox"
            checked={availabilityFilter}
            onChange={(e) => setAvailabilityFilter(e.target.checked)}
          />
          Available now
        </label>
      </div>

      <div className="property-list">
        {paginatedData.map((property) => (
          <div key={property.id} className="card">
            <h3>{property.name}</h3>
            <p>Rent: ₹{property.rent}</p>
            <p>Location: {property.location}</p>
            <p>Status: {property.available ? "Available" : "Full"}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <span> Page {page} of {totalPages} </span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>

      <footer className="footer">
        © 2025 PG Listing Portal. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
