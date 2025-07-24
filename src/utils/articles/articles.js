function Articles({ articles }) {
  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((i, index) => (
            <tr data-testid="article" key={index}>
              <td data-testid="article-title">{i.title}</td>
              <td data-testid="article-upvotes">{i.upvotes}</td>
              <td data-testid="article-date">{i.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
