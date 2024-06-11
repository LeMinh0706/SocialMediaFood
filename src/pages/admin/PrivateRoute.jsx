import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const PrivateRoute = (props) => {
    const role_id = useSelector(state => state.user.account.roleId)

    if (role_id !== 2) return <Navigate to="/accessdenied" />

    return (
        <>
            {props.children}
        </>
    )

}

export default PrivateRoute