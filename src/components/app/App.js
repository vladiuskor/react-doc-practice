import './App.css';
import AppInfo from "../app-info/AppInfo";
import SearchPanel from "../search-panel/SearchPanel";
import AppFilter from "../app-filter/AppFilter";
import EmployersList from "../employers-list/EmployersList";
import EmployersAddForm from "../employers-add-form/EmployersAddForm";

function App() {

    const data = [
        {
            name: "Vlad Korobko",
            salary: 1300,
            increase: true,
            id: 1
        },
        {
            name: "Roma Korobko",
            salary: 700,
            increase: true,
            id: 2
        },
        {
            name: "Dima Korobko" ,
            salary: 4000,
            increase: false,
            id: 3
        }
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployersList data={data}/>
            <EmployersAddForm />
        </div>
    );
}

export default App;