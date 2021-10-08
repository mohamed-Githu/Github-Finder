import React from "react";

const RepoItem = ({ repo }) => {
  return (
    <div>
      <h3>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h3>
    </div>
  );
};

export default RepoItem;
