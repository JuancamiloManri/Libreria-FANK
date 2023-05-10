import "./DropdownItem.css"

const DropdownItem = (props) =>{
    return(
        <li className = 'dropdownItem'>
            <a> {props.text} </a>
        </li>
    );
}

export default DropdownItem