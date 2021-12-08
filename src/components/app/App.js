import './App.css';
import AppInfo from "../app-info/AppInfo";
import SearchPanel from "../search-panel/SearchPanel";
import AppFilter from "../app-filter/AppFilter";
import EmployersList from "../employers-list/EmployersList";
import EmployersAddForm from "../employers-add-form/EmployersAddForm";

function App() {
    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployersList />
            <EmployersAddForm />
        </div>
    );
}

export default App;