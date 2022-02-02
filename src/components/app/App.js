import {Component} from "react";

import './App.css';
import AppInfo from "../app-info/AppInfo";
import SearchPanel from "../search-panel/SearchPanel";
import AppFilter from "../app-filter/AppFilter";
import EmployersList from "../employers-list/EmployersList";
import EmployersAddForm from "../employers-add-form/EmployersAddForm";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
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
                    name: "Dima Korobko",
                    salary: 4000,
                    increase: false,
                    id: 3
                }
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployersList data={this.state.data} onDelete={this.deleteItem}/>
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

// function App() {
//
//     const data = [
//         {
//             name: "Vlad Korobko",
//             salary: 1300,
//             increase: true,
//             id: 1
//         },
//         {
//             name: "Roma Korobko",
//             salary: 700,
//             increase: true,
//             id: 2
//         },
//         {
//             name: "Dima Korobko" ,
//             salary: 4000,
//             increase: false,
//             id: 3
//         }
//     ];
//
//     return (
//         <div className="app">
//             <AppInfo />
//
//             <div className="search-panel">
//                 <SearchPanel />
//                 <AppFilter />
//             </div>
//
//             <EmployersList data={data} onDelete={id => console.log(id)}/>
//             <EmployersAddForm />
//         </div>
//     );
// }

export default App;