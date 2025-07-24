import { useEffect, useState } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./Articles";

const title = "Sorting Articles";

// export function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 15 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// const [sort, setSort] = useState('upvotes')

// const data = useMemo(() => {
//     let currentData = [...articles]
//     currentData.sort((a, b) => {
//         if (sort === 'upvotes') {
//             return b.upvotes - a.upvotes
//         } else {
//             return new Date(b.date) - new Date(a.date)
//         }
//     })
//     return currentData
// }, [sort])

// const [data, setData] = useState(articles.sort((a, b) => (b.upvotes - a.upvotes)))
// const handleChange = (sortBy) => {
//     let currentData = [...data]

//     currentData.sort((a, b) => {
//         if (sortBy === 'upvotes') {
//             return b.upvotes - a.upvotes
//         } else {
//             return new Date(b.date) - new Date(a.date)
//         }
//     })
//     setData(currentData)
// }

function App({ articles }) {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("upvotes");
  useEffect(() => {
    let currentData = [...articles];
    currentData.sort((a, b) => {
      if (sort === "upvotes") {
        return b.upvotes - a.upvotes;
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });
    setData(currentData);
  }, [articles, sort]);

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => setSort("upvotes")}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => setSort("date")}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={data} />
    </div>
  );
}

export default App;
