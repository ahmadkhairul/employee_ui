import { useState } from "react";

interface City {
  id: number;
  cityname: string;
  country: string;
}

const cityData: City[] = [
  { id: 1, cityname: "Jakarta", country: "Indonesia" },
  { id: 2, cityname: "Bandung", country: "Indonesia" },
  { id: 3, cityname: "Surabaya", country: "Indonesia" },
  { id: 4, cityname: "Tokyo", country: "Japan" },
  { id: 5, cityname: "Osaka", country: "Japan" },
  { id: 6, cityname: "Kyoto", country: "Japan" },
  { id: 7, cityname: "New York", country: "USA" },
  { id: 8, cityname: "Los Angeles", country: "USA" },
  { id: 9, cityname: "Chicago", country: "USA" },
  { id: 10, cityname: "London", country: "UK" },
  { id: 11, cityname: "Manchester", country: "UK" },
  { id: 12, cityname: "Birmingham", country: "UK" },
  { id: 13, cityname: "Berlin", country: "Germany" },
  { id: 14, cityname: "Munich", country: "Germany" },
  { id: 15, cityname: "Frankfurt", country: "Germany" },
  { id: 16, cityname: "Medan", country: "Indonesia" },
  { id: 17, cityname: "Yogyakarta", country: "Indonesia" },
  { id: 18, cityname: "Makassar", country: "Indonesia" },
  { id: 19, cityname: "Sapporo", country: "Japan" },
  { id: 20, cityname: "Nagoya", country: "Japan" },
  { id: 21, cityname: "San Francisco", country: "USA" },
  { id: 22, cityname: "Seattle", country: "USA" },
  { id: 23, cityname: "Miami", country: "USA" },
  { id: 24, cityname: "Liverpool", country: "UK" },
  { id: 25, cityname: "Leeds", country: "UK" },
  { id: 26, cityname: "Hamburg", country: "Germany" },
  { id: 27, cityname: "Cologne", country: "Germany" },
  { id: 28, cityname: "Palembang", country: "Indonesia" },
  { id: 29, cityname: "Semarang", country: "Indonesia" },
  { id: 30, cityname: "Tokyo Bay", country: "Japan" },
  { id: 31, cityname: "Kobe", country: "Japan" },
  { id: 32, cityname: "Dallas", country: "USA" },
  { id: 33, cityname: "Houston", country: "USA" },
  { id: 34, cityname: "Atlanta", country: "USA" },
  { id: 35, cityname: "Bristol", country: "UK" },
  { id: 36, cityname: "Nottingham", country: "UK" },
  { id: 37, cityname: "Stuttgart", country: "Germany" },
  { id: 38, cityname: "Dusseldorf", country: "Germany" },
  { id: 39, cityname: "Solo", country: "Indonesia" },
  { id: 40, cityname: "Pekanbaru", country: "Indonesia" },
  { id: 41, cityname: "Fukuoka", country: "Japan" },
  { id: 42, cityname: "Sendai", country: "Japan" },
  { id: 43, cityname: "Boston", country: "USA" },
  { id: 44, cityname: "Phoenix", country: "USA" },
  { id: 45, cityname: "San Diego", country: "USA" },
  { id: 46, cityname: "Sheffield", country: "UK" },
  { id: 47, cityname: "Oxford", country: "UK" },
  { id: 48, cityname: "Dresden", country: "Germany" },
  { id: 49, cityname: "Nuremberg", country: "Germany" },
  { id: 50, cityname: "Malang", country: "Indonesia" },
];

export default function PaginatedCity() {
  const [perPage, setPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(cityData.length / perPage);
  const paginatedCities = cityData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div>
      <h1>City List with Pagination</h1>

      <div>
        <label htmlFor="perPage">Per Page:</label>
        <select
          id="perPage"
          value={perPage}
          onChange={(e) => {
            setPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active-page" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {paginatedCities.map((city) => (
            <tr key={city.id}>
              <td>{city.id}</td>
              <td>{city.cityname}</td>
              <td>{city.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
