import { useNavigate } from "react-router-dom"
export default function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => {
                navigate("/home")
            }}>Home</button>
            <button onClick={() => {
                navigate("/")
            }}>Landing</button>
        </>
    )
}