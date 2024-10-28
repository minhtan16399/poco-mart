import React from 'react';
import {Provider} from "react-redux";
import store from "./redux/store";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/home";
import DetailProduct from "./pages/detail-product";
import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <Provider store={store}>
        <Router>
            <Header />
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'detail-product'}>
                    <Route path={':id'} element={<DetailProduct />}/>
                </Route>
            </Routes>
            <Footer />
        </Router>
    </Provider>
  );
}

export default App;
