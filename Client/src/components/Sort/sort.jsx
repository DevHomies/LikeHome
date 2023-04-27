import "./sort.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

function Sort(props) {
  const [visible, setVisible] = useState(false); // Toggle visilibility of dropdown menu

  return (
    <div
      className={visible ? "sort-box box-highlighted" : "sort-box"}
      onClick={() => {
        setVisible(!visible);
        console.log(visible);
      }}
    >
      <div class="sort-by"> Sort by </div>
      <text className = "selected"> {props.sortBy} </text>
      <div className="icon">
        <IoMdArrowDropdown />
      </div>
      <div>
        <ul className={visible ? "items" : "hidden"}>
          {props.options.map((option, index) => {
            return (
              <DropDownItem handleSortBy={props.handleSortBy} name={option} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function DropDownItem(props) {
  return (
    <li
      key={props.name}
      className="sort-item"
      onClick={() => {
        props.handleSortBy(props.name);
      }}
    >
      {props.name}
    </li>
  );
}

export default Sort;
