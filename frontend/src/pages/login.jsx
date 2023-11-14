import {useDispatch, useSelector} from "react-redux";
import {setToken, setUser} from "../redux/actions/userAction";
import {useState} from "react";
import {fetchUser, signIn} from "../services/user.service";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signIn({
                email: email,
                password: password
            });
            console.log(response);
            if (response.status === 200) {
                dispatch(setToken(response.body.token));
                const result = await fetchUser(response.body.token);
                const profile = await result.body;
                dispatch(setUser(profile));
                navigate('/user');
            }
        } catch(e) {
            console.log(e)
        }
    }

    return (

        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me"/><label htmlFor="remember-me"> Remember me</label>
                </div>
                <button type="submit" className="sign-in-button">Sign In</button>
            </form>
        </section>

    )
}
export default Login