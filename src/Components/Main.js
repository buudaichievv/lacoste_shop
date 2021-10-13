import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Header from './Header/Header'
import MainPage from './Mainpage/MainPage'

function Main() {
    return (
        <BrowserRouter>
            <Header/>
            <Route exact path='/' render={MainPage}/>
            <Route exact path='/menPage' render={MainPage}/>
            <Route exact path='/womenPage' render={MainPage}/>
            <Route exact path='/kidPage' render={MainPage}/>
            <Route exact path='/customPage' render={MainPage}/>
            <Route exact path='/clubPage' render={MainPage}/>
            <Route exact path='/brandPage' render={MainPage}/>
            <Route exact path='/search' render={MainPage}/>
            <Route exact path='/supportPage' render={MainPage}/>
            <Route exact path='/userPage' render={MainPage}/>
            <Route exact path='/sgopingPage' render={MainPage}/>
        </BrowserRouter>
    )
}
export default Main
