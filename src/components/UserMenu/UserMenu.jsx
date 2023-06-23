import { useSelector } from "react-redux"
import { getUsername } from "redux/auth/authSelectors"

export const UserMenu = () => {
    const user = useSelector(getUsername)
    return (
        <div>
            <p>User: {user}</p>
        </div>
    )
}