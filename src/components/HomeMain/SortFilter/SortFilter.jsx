import React from "react";
import { useState } from "react";
import { useSortFilterContext } from "../../../contexts/sortFilterContext";
import "./sort-filter.css";
const SortFilter = () => {
  const [isSortByClicked, setIsSortByClicked] = useState(false);
  const [isFilterByClicked, setIsFilterByClicked] = useState(false);
  const {sortFilterState,sortFilterDispatch}=useSortFilterContext()
  return (
    <div className="sort-filter-container text-sm">
      <div>
        {/* <button
          onClick={() => {
            setIsSortByClicked((isSortByClicked) => !isSortByClicked);
            isFilterByClicked &&
              setIsFilterByClicked((isFilterByClicked) => !isFilterByClicked);
          }}
          className="sort-filter-btn"
        >
          Sort By
        </button> */}
        <button
          onClick={() => {
            setIsFilterByClicked((isFilterByClicked) => !isFilterByClicked);
            isSortByClicked &&
              setIsSortByClicked((isSortByClicked) => !isSortByClicked);
          }}
          className="sort-filter-btn"
        >
          Filter By
        </button>
      </div>

      {/* {isSortByClicked && (
        <div className="sorting m-t-xs m-t-md">

          <div className="sort-by-date-added  m-t-s">
            <span>
              <b>Date Added</b>
            </span>
            <div className="m-t-xs w-full flex flex-sb  ">
              <label >
                <input type="radio" name="date-added"
                checked={sortFilterState.sort==="LATEST_TO_OLDEST"?true:false}
                onChange={()=>sortFilterDispatch({type:"SORT",payload:{value:"LATEST_TO_OLDEST"}})}
                />
                Latest to oldest
              </label>
              <label >
                <input type="radio" name="date-added"
                checked={sortFilterState.sort==="OLDEST_TO_LATEST"?true:false}
                onChange={()=>sortFilterDispatch({type:"SORT",payload:{value:"OLDEST_TO_LATEST"}})}

                />
                Oldest to latest
              </label>
            </div>
          </div>
        </div>
      )} */}
      {isFilterByClicked && (
        <div className="filtering flex-c flex-sb m-t-md">
        <div className="filter-by-priority">
            <div className="flex-r w-p-full flex-sb">
              <span>
                <b>Priority</b>
              </span>
              <button className="filter-clear-btn sort-filter-btn"
            onClick={()=>sortFilterDispatch({type:"RESET"})}
            >Clear</button>
            </div>
            <div className="m-t-xs w-p-half flex-r flex-sb">
              <label >
                <input type="checkbox" name="priority"
                checked={sortFilterState.filter.high?true:false}
                onChange={()=>sortFilterDispatch({type:"FILTER_BY_HIGH",payload:{value:!sortFilterState.filter.high}})}
                 />
                High
              </label>
              <label >
                <input type="checkbox" name="priority"
                 checked={sortFilterState.filter.medium?true:false}
                onChange={()=>sortFilterDispatch({type:"FILTER_BY_MEDIUM",payload:{value:!sortFilterState.filter.medium}})}
                />
                Medium
              </label>
              <label >
                <input type="checkbox" name="priority"
                 checked={sortFilterState.filter.low?true:false}
                onChange={()=>sortFilterDispatch({type:"FILTER_BY_LOW",payload:{value:!sortFilterState.filter.low}})}
                 />
                Low
              </label>
            </div>
          </div>
          <div className="flex-r w-p-full flex-sb">
            <span>
              <b>Tags</b>
            </span>

          </div>
          <div className="w-p-full flex-r flex-sb m-t-s">
            <label>
              <input type="checkbox"
                checked={sortFilterState.filter.personal?true:false}
                onChange={()=>sortFilterDispatch({type:"FILTER_BY_PERSONAL",payload:{value:!sortFilterState.filter.personal}})}

              />
Personal
            </label>
            <label>
              <input type="checkbox"
                checked={sortFilterState.filter.work?true:false}
                onChange={()=>sortFilterDispatch({type:"FILTER_BY_WORK",payload:{value:!sortFilterState.filter.work}})}

              />
              Work
            </label>

            <label >
              <input type="checkbox"
                checked={sortFilterState.filter.health?true:false}
                onChange={()=>sortFilterDispatch({type:"FILTER_BY_HEALTH",payload:{value:!sortFilterState.filter.health}})}
              />
              Health
            </label>
            <label >
              <input type="checkbox"
                checked={sortFilterState.filter.study?true:false}
                onChange={()=>sortFilterDispatch({type:"FILTER_BY_STUDY",payload:{value:!sortFilterState.filter.study}})}
              />
              Study
            </label>
            <label >
              <input type="checkbox"
                checked={sortFilterState.filter.travel?true:false}
                onChange={()=>sortFilterDispatch({type:"FILTER_BY_TRAVEL",payload:{value:!sortFilterState.filter.travel}})}
              />
              Travelling
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export { SortFilter };
