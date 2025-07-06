import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css'
import {navItems} from "./utils/constants.js";
import {useState} from "react";


function App() {
    const [page, setPage] = useState(navItems[0]);
    return (
        <div className="container-fluid">
            <Header changePage={setPage} />
            <Main page={page}/>
            <Footer/>
        </div>)
}

export default App
