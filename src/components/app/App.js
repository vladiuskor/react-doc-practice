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
                    increase: false,
                    rise: true,
                    id: 1
                },
                {
                    name: "Roma Korobko",
                    salary: 700,
                    increase: true,
                    rise: false,
                    id: 2
                },
                {
                    name: "Dima Korobko",
                    salary: 4000,
                    increase: false,
                    rise: false,
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
            rise: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    // onToggleIncrease = (id) => {

    // More readable way but it is a lot of code
    // this.setState(({data}) => {
    //     const index = data.findIndex(elem => elem.id === id)
    //
    //     const old = data[index];
    //     const newItem = {...old, increase: !old.increase}
    //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
    //
    //     return {
    //         data: newArr
    //     }
    // })

    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if(item.id === id) {
    //                 return {...item, increase: !item.increase}
    //             }
    //             return item
    //         })
    //     }))
    // }

    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if(item.id === id) {
    //                 return {...item, rise: !item.rise}
    //             }
    //             return item
    //         })
    //     }))
    // }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployersList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
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