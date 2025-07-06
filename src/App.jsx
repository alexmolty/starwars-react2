import Main from './components/main/Main.jsx';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
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
