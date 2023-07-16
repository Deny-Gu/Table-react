import React, { useEffect, useState } from "react";
import axios from "axios";
import './css/main.css'
import './css/icons.css'
import './css/loader.css'
import Table from "./components/Table";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import AddUser from "./components/AddUser";
import viewAddUserForm from "./components/viewAddUserForm";
import SortUsers from "./components/SortUsers";

const url = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

function App () {
    const [usersData, setUsersData] = useState([]);
    const [copyUsersData, setCopyUsersData] = useState([]);
    const [originalUsersData, setOriginalUsersData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const counterRowPage = 50;

    useEffect(() => {
        axios.get(url).then((res) => {
            if (res.status === 200) {
                const loader = document.querySelector('.loading-container');
                loader.style.display = 'none';
                setUsersData(res.data);
                setCopyUsersData(res.data);
                setOriginalUsersData(res.data)
            }
        });
    }, []);

    const pages = Math.ceil(usersData.length / counterRowPage);
    let arrPages = [];
    
    for (let i = 1; i <= pages; i++) {
        arrPages.push(i)
    }

    const numCurrentPage = (p) => {
        setCurrentPage(p)
    }

    const lastItemBlock = currentPage * counterRowPage;
    const firstItemBlock = lastItemBlock - counterRowPage;
    const arrUsersDataPagination = usersData.slice(firstItemBlock, lastItemBlock)

    return (
      <div className="App">
        <header>
            <div className="search">
                <input type="text" id="search-input"></input>
                <button className="search-input-btn" onClick={ () => {Search({ setUsersData, setCopyUsersData, originalUsersData })} }>Найти</button>
            </div>
            <div className="add-user">
                <button className="add-user-btn" onClick={ viewAddUserForm }>Добавить</button>
            </div>
            <div className="add-user-form">
                <label htmlFor="user-id">Id</label>
                <input type="text" id="user-id"></input>
                <label htmlFor="user-first-name">FirstName</label>
                <input type="text" id="user-first-name"></input>
                <label htmlFor="user-last-name">LastName</label>
                <input type="text" id="user-last-name"></input>
                <label htmlFor="user-email">Email</label>
                <input type="text" id="user-email"></input>
                <label htmlFor="user-phone">Phone</label>
                <input type="text" id="user-phone"></input>
                <button className="user-btn-add" onClick={ () => {AddUser({ setUsersData, setCopyUsersData, originalUsersData, setOriginalUsersData })} }>Добавить</button>
            </div>
        </header>
        <main>
            <Table sortUsers={ (event) => { SortUsers(event, { usersData, setUsersData, copyUsersData}) } } usersData={ arrUsersDataPagination } onLoad/>
        </main>
        <footer>
            <Pagination pages={ arrPages } numCurrentPage={ numCurrentPage }/>
        </footer>
        <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-text">Загрузка</div>
        </div>          
      </div>
      
    );
}

export default App;