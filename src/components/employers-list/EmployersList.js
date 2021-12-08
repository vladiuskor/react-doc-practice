import EmployersListItem from "../employers-list-item/EmployersListItem";
import './EmployersList.css';

const EmployersList = () => {
    return (
        <ul className="app-list list-group">
            <EmployersListItem />
            <EmployersListItem />
            <EmployersListItem />
        </ul>
    )
}

export default EmployersList;