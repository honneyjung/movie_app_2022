import React from "react";
import {Link} from "react-router-dom"
import "./Navigation.css"


/*
    a태그로 네비게이션을 넣으면 화면 전환시 깜빡임이 생겨서
    리액트를 쓰는 의미가 없기때문에 꼭 Link 로 연결할것
*/ 

function Navigation() {
    return(
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navigation;