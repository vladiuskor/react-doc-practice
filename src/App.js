import './App.css';
import React from "react";

const Header = () => {
    return <h2>Hello World!</h2>
}

// Functional component
// const Field = () => {
//     const holder = "Enter here";
//     const styledField = {
//       width: '300px'
//     };
//     return <input
//             type="text"
//             placeholder={holder}
//             style={styledField}/>
// }


//Class component
class Field extends React.Component {
    render() {
        const holder = "Enter here";
        const styledField = {
            width: '300px'
        };

        return <input
            type="text"
            placeholder={holder}
            style={styledField}/>
    }
}

const Btn = () => {
    const text = 'Log in';
    const logged = true;

    return <button>{logged ? 'Enter' : text}</button>
}

function App () {
    return (
        <div className="App">
            <Header/>
            <Field/>
            <Btn/>
        </div>
    )
}

export {Header};
export default App;



