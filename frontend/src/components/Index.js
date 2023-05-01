import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import Header from "./Navbar/Header";
import Profile from "./Conta/Profile";
import Sobre from "./Content/Sobre";
import ForgotPassword from "./Auth/ForgotPassword";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";



export default function Index(props) {
    const { isLoggedIn, setLoggedIn, store } = props
    return (
        <div>
            <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
            <BrowserRouter>
                {isLoggedIn ?
                    <Routes>
                        <Route path="/" element={<Profile setIsLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} store={store} />}></Route>
                        <Route path="/conta" element={<Profile setLoggedIn={setLoggedIn} store={store}/>}></Route>
                    </Routes>
                    :
                    <Routes>
                        <Route path="/" element={<SignIn setIsLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />}></Route>
                        <Route path="/conta" element={<SignIn setIsLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />}></Route>
                        <Route path="/signup" element={<SignUp setIsLoggedIn={setLoggedIn} />}></Route>
                    </Routes>
                }
                <Routes>
                    <Route path="/sobre" element={<Sobre />}></Route>
                    <Route path="/forgot-password" element={<ForgotPassword />}></Route>
                </Routes>
            </BrowserRouter>
        </div>

    )
}