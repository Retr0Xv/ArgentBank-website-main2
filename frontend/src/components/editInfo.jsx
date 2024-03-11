import {GetUser} from "../redux/selectors/userSelector";
import {useState} from "react";
import {editProfile} from "../services/user.service";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../redux/actions/userAction";

const EditInfo = () => {

    const {data, token} = GetUser();
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await editProfile(token, username);
            if (response.status === 200) {
                dispatch(setUser(response.body));
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h2>Edit user info</h2>
            <form className="edit editm" onClick={submit}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username : *</label>
                    <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} required defaultValue={data.userName}/>
                </div>

                <div className="input-wrapper">
                    <label htmlFor="firstname">Firstname : *</label>
                    <input type="text" id="firstname" disabled required value={data.firstName}/>
                </div>

                <div className="input-wrapper">
                    <label htmlFor="lastname">Lastname : *</label>
                    <input type="text" id="lastname" disabled required value={data.lastName}/>
                </div>
                <button className="edit-button">Save</button>
            </form>
        </>
    )
}

export default EditInfo;