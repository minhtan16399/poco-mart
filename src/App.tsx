import React from 'react';
import {Provider} from "react-redux";
import store from "./redux/store";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/home";
import DetailProduct from "./pages/detail-product";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <Provider store={store}>
        <Router>
            <Header />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/detail-product'} element={<DetailProduct />} />
            </Routes>
            <Footer />
        </Router>
    </Provider>
  );
}

export default App;
