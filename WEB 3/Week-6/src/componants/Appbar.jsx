import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();

return <div>

    <button onClick={()=>{
      navigate("/")
    }}>Dashboard</button>

    <button onClick={()=>{
      navigate("/landing")
    }}>Landing paged</button>

  </div>
}
export default Appbar;