import EmployersListItem from "../employers-list-item/EmployersListItem";
import './EmployersList.css';

const EmployersList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            // <EmployersListItem name={item.name} salary={item.salary} increase={item.increase} id={item.id}/> Old version
            <EmployersListItem key={id} {...itemProps} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;