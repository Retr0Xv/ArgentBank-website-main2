import {useDispatch, useSelector} from "react-redux";
import {setToken} from "../redux/actions/userAction";
import {useState} from "react";
import signin from "../services/user.service";

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch();
    //const token = useSelector(state => state.user.token)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
/*            const response = await signin({
                email: email,
                password: password
            });
            console.log(response);
            if (response.status === 200) {
                dispatch(setToken(response.body.token));
            }*/
        } catch(e) {
            console.log(e)
        }
        //dispatch(setToken("zefzefzezfe"))
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