import { Navigate } from "react-router-dom"
import Swal from "sweetalert2"

export function PrivateRoute({ children }) {
    const dados = {
        id: localStorage.getItem('key_id'),
        email: localStorage.getItem('key_email')
    }

    return dados.id !== null ? children : <Navigate to={"/login"} />
}