import React, { useEffect, useState } from "react";
import "./career.css";
import DataInfo from "./DataInfo";
import Pagination from "../Pagination/Pagination";
import { Fade } from "react-reveal";
const Career = () => {
  const [data, setData] = useState([]);

  const ITEM_PER_PAGE = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const offset = currentPage * ITEM_PER_PAGE;
  const currentPageData = data.slice(offset, offset + ITEM_PER_PAGE);
  const pageCount = Math.ceil(data.length / ITEM_PER_PAGE);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container career" id="career">
      <div className="section-title">
        <h5>Career</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data &&
          currentPageData.map((item, index) => (
            <Fade left>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <DataInfo {...item} />
              </div>
            </Fade>
          ))}
      </div>
      <Fade right>
        <div className="pagination-details">
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        </div>
      </Fade>
    </div>
  );
};

export default Career;
