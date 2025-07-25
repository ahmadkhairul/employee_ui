import { useState } from "react";

interface City {
  id: number;
  cityname: string;
  temperatureC: number;
  description: string;
}

const initialCities: City[] = [
  { id: 1, cityname: "Jakarta", temperatureC: 33.2, description: "Hot" },
  { id: 2, cityname: "Bandung", temperatureC: 24.8, description: "Sunny" },
  { id: 3, cityname: "Tokyo", temperatureC: 29.3, description: "Sunny" },
  { id: 4, cityname: "New York", temperatureC: 20.1, description: "Sunny" },
];

const convertToF = (celsius: number): number => (celsius * 9) / 5 + 32;

export default function FavoriteCity() {
  const [cities] = useState<City[]>(initialCities);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [unit, setUnit] = useState<"C" | "F">("C");
  const [search, setSearch] = useState<string>("");

  const toggleFavorite = (cityId: number): void => {
    if (favorites.includes(cityId)) {
      setFavorites(favorites.filter((id) => id !== cityId));
    } else {
      setFavorites([...favorites, cityId]);
    }
  };

  const formatTemp = (tempC: number): string => {
    const temp = unit === "C" ? tempC : convertToF(tempC);
    return temp.toFixed(1);
  };

  const filteredCities = cities.filter((city) =>
    city.cityname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>City Weather Table</h1>
      <input
        type="text"
        placeholder="Search by city name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>City</th>
            <th>Temperature</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredCities.map((city) => (
            <tr key={city.id}>
              <td>{city.id}</td>
              <td>{city.cityname}</td>
              <td>
                {formatTemp(city.temperatureC)}°{unit}
              </td>
              <td>{city.description}</td>
              <td>
                <button
                  onClick={() => toggleFavorite(city.id)}
                >
                  {favorites.includes(city.id)
                    ? "Remove Favorite"
                    : "Add Favorite"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => setUnit(unit === "C" ? "F" : "C")}
      >
        Switch to {unit === "C" ? "Fahrenheit" : "Celsius"}
      </button>

      <h2>Favorite Cities</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>City</th>
            <th>Temperature</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cities
            .filter((city) => favorites.includes(city.id))
            .map((city) => (
              <tr key={city.id}>
                <td>{city.id}</td>
                <td>{city.cityname}</td>
                <td>
                  {formatTemp(city.temperatureC)}°{unit}
                </td>
                <td>{city.description}</td>
                <td>
                  <button
                    onClick={() => toggleFavorite(city.id)}
                  >
                    Remove Favorite
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
