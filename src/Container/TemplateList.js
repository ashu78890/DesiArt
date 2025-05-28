

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemplatesRequest } from "../Store/actions/templateActions";

const TemplateList = () => {
  const dispatch = useDispatch();
  const { templates, lastId, loading, error } = useSelector((state) => state.templates);
  const listRef = useRef(null);

  const tabApiMapping = {
    "All": "ALL",
    "My templates": "PRIVATE",
    "Shared with me": "PRIVATE",
    "Community": "PUBLIC",
    "Predefined": "PRE_DEFINED",
  };

  const [visibilityScope, setVisibilityScope] = useState("All"); 

  useEffect(() => {
    if (visibilityScope) {
      dispatch(fetchTemplatesRequest({ visibilityScope: tabApiMapping[visibilityScope], lastId: "" }));
    }
  }, [dispatch, visibilityScope]);

  const handleTabChange = (tab) => {
    setVisibilityScope(tab);
    if (listRef.current) {
      listRef.current.scrollTop = 0;  
    }
    dispatch(fetchTemplatesRequest({ visibilityScope: tabApiMapping[tab], lastId: "" }));
  };


  const handleScroll = () => {
    if (listRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;

      if (scrollTop + clientHeight >= scrollHeight - 20) {
        if (!loading && lastId) {
          dispatch(fetchTemplatesRequest({ visibilityScope: tabApiMapping[visibilityScope], lastId })); 
        }
      }
    }
  };

  return (
    <div>
      <div className="tabs">
        {Object.keys(tabApiMapping).map((tab) => (
          <button
            key={tab}
            className={visibilityScope === tab ? "active" : ""}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div
        ref={listRef}
        onScroll={handleScroll}
        style={{
          height: "400px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        <h2>Templates ({tabApiMapping[visibilityScope]})</h2>
        {templates?.map((template, index) => (
          <div key={index} className="template-item">
            {template.name}
          </div>
        ))}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
};

export default TemplateList;





