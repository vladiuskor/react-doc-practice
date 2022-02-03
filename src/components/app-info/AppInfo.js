import './AppInfo.css';

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Облік працівників у компінії AMD UA</h1>
            <h2>Загальна кількість працівників: {employees}</h2>
            <h2>Премію отримають: {increased}</h2>
        </div>
    )
}

export default AppInfo;