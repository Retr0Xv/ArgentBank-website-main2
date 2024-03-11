import {GetUser} from "../redux/selectors/userSelector";
import Account from "../components/account";
import {useState} from "react";
import EditInfo from "../components/editInfo";

const User = () => {

    const user = GetUser();
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="header">
                <h1>Welcome back<br/>{user?.data?.userName}</h1>
                {toggle && <EditInfo/>}
                <button className="edit-button" onClick={() => setToggle(!toggle)}>Edit Name</button>
            </div>
            <Account/>
        </>
    );
};
export default User;
