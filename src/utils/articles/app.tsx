import { useEffect, useState } from "react";
import Articles from "./articles";

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

type Article = {
  title: string;
  upvotes: number;
  date: number | string;
};

export interface ArticleProps {
  articles: Article[];
}

function App({ articles }: ArticleProps) {
  const [data, setData] = useState<Article[]>([]);
  const [sort, setSort] = useState<"upvotes" | "date">("upvotes");
  useEffect(() => {
    const currentData = [...articles];
    currentData.sort((a, b) => {
      if (sort === "upvotes") {
        return b.upvotes - a.upvotes;
      } else {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });
    setData(currentData);
  }, [articles, sort]);

  return (
    <div>
      <nav>Sorting Articles</nav>
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
