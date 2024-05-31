import React, { useState } from 'react';
import "./Authors.css";
import { authors } from "../../data/authors";

const Authors = () => {
    const [search, setSearch] = useState("");

  return (
    <section className="authors">
        <div className="authors-search-wrapper">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              type="search"
              placeholder="Search in authors"
            />
        </div>
        
        <div className="search-wrapper">
            {authors.filter((a) => a.name.toLowerCase().includes(search))
            .map((author) => 
                <div key={author.id} className="author">
                    <img src={author.image} alt={author.name} className="author-img" />
                    <h4 className="author-name">{author.name}</h4>
                </div>
            )}
        </div>
    </section>
  );
};

export default Authors;