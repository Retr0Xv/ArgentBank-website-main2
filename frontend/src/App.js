import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import User from "./pages/user";
import Header from "./components/header";
import Footer from "./components/footer";
import './assets/css/main.css';
import configureStore from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";


const {store, persistor} = configureStore();

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Header/>
                    <main>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/user' element={<User/>}/>
                        </Routes>
                    </main>
                    <Footer/>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
