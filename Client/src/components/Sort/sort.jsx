import "./sort.css"
import {IoMdArrowDropdown} from "react-icons/io";
import {useState} from "react";

function Sort(props) {
    const [visible, setVisible] = useState(false);  // Toggle visilibility of dropdown menu

    return (
        <div className = {visible? "box box-highlighted": "box"} onClick={() => {setVisible(!visible); console.log(visible);}}>
            <div class = "sort-by"> Sort by </div>
            <text> {props.sortBy} </text>
            <div className="icon"><IoMdArrowDropdown/></div>


            <div className = {visible? "items":"hidden"}>
                <ul>
                    <DropDownItem handleSortBy = {props.handleSortBy} name = "Recommended"/>
                    <DropDownItem handleSortBy = {props.handleSortBy} name = "Price"/>
                </ul>
            </div>
            
        </div>
    );
}


function DropDownItem(props) {
    return (
        <li key = {props.name} className = "sort-item" onClick = {() => {props.handleSortBy(props.name); }}>
            {props.name}
        </li>
    );
}

export default Sort;