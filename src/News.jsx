import axios from "axios";
import React, { useState, useEffect } from "react";
import NewsCard from "./components/NewsCard";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  // console.log(newsData);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("heyy kiddo");
    setQuery(search);
  };
  // console.log('query:', query);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://hn.algolia.com/api/v1/search?",
          {
            params: { query },
          }
        );
        const { hits } = data;
        setNewsData(hits);
      } catch (error) {
        console.log("error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  // const click = () => {
  //   console.log("here");
  // };

  return (
    <>
     
  <nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="#">Hybr1d</a>
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    </ul>
    <form onSubmit={submitHandler} className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2"  onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
      
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    
      <div className="container">
        {loading ? (
          <h3 className="flx">Loadng...</h3>
        ) : (
          newsData.map((item) => (
            <NewsCard  item={item} objectID={item.objectID} />
          ))
        )}
      </div>
      
    </>
  );
};

export default News;
