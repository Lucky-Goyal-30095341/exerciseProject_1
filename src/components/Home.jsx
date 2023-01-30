import { useEffect, useState } from "react";
// import Search from "../../Exercise1/search";
// import TableData from "../table";
// import style from './home.module.scss';
// import './style.css';
import Search from "./Search";
import Table from "./Table";
import Navbar from "./Navbar";
import '../style/home.css';
import Footer from "./Footer";

const Home = () => {

    // const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [buttonValue, setButtonValue] = useState("A-Z")

    const getApiData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(user => {
                // console.log(user);
                user.sort((a,b)=>{
                    if(a.name>b.name){
                        return 1;
                    }
                    if(a.name<b.name){
                        return -1;
                    }
                    return 0;
                });
                // setData(user);
                setFilterData(user);
            })
    }

    useEffect(() => {
        getApiData();
    }, [])
// sorting table data on the base of name
    const handleSort = () => {
        setButtonValue(buttonValue.split('').reverse().join(''));
        filterData.reverse();
    }

    //delete row 
    const deleteRowData=(id)=>{
        const text="Are you shure you want to delete data.";
        if(window.confirm(text)==true){
            const user= filterData.filter((item, index)=> id!=item.id);
            setFilterData(user);
        }
    }
    return (
        <>
            <Navbar />
            <div className="outer-container">
                <div className="left-container">
                    <Search
                        data={filterData}
                        setFilterData={setFilterData}
                    />
                    <button
                        type="button"
                        onClick={handleSort}
                    >{buttonValue}
                    </button>

                </div>
                <div className="right-container">
                    <Table
                        data={filterData}
                        delRow={deleteRowData}
                    />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home;