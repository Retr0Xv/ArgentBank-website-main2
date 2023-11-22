import {Link} from "react-router-dom";
import argentBankLogo from '../assets/img/argentBankLogo.png'
import {GetUser} from "../redux/selectors/userSelector";
import {useDispatch} from "react-redux";
import {resetUser} from "../redux/actions/userAction";

const Header = () => {

    const user = GetUser();
    const dispatch = useDispatch();

    const logout = async () => {
        dispatch(resetUser());
        // Supprimer token & data du redux et vérifier qu'il ny est plus dans redux et que ça n'affiche du coup pas "logout" dans la page
    }

    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {user.data && user.token ? (
                    <Link to="/login"  onClick={logout} className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Log out
                    </Link>
                ) : (
                    <Link to="/login" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    )
}
export default Header