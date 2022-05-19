import React from 'react'
import Header from './components/Header'
import Portfolio from "./components/Portfolio"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./components/REDUX";
import Converter from "./components/Converter/Converter";

const App: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <div className='app-wrapper'>
                <Header/>
                <Routes>
                    <Route path='/' element={<Portfolio/>}/>
                    <Route path='/portfolio' element={<Portfolio/>}/>
                    <Route path='/converter/*' element={<Converter/>}/>
                </Routes>
            </div>
        </Provider>
    </BrowserRouter>
}

export default App