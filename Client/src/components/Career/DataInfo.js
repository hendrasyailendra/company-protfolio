import React, { useState } from "react";
import { FcCollapse, FcExpand } from "react-icons/fc";

const DataInfo = ({ title, body }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={show ? "post-card open" : "post-card"}
      onClick={() => setShow(!show)}
    >
      <div className="collapse-option">
        <h6 className="post-card-title">{title}</h6>
        <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
      </div>
      <div className="description">{show && <p>{body}</p>}</div>
    </div>
  );
};

export default DataInfo;
