import {useSelector} from "react-redux";

export const GetUser = () => {
    return useSelector((state) => state.user);
}