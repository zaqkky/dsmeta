import axios from "axios";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/resquest";
import "./styles.css";


type props = {
    saleId:  number;
}
function handleClick(id :number){
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response =>{
            console.log("socuesso")
        })
}


function NotificationButton( {saleId} : props) {
    return (
        <div className="dsmeta-red-btn-conteiner" onClick={()=>handleClick(saleId)}>
            <div className="dsmeta-red-btn">
                <img src={icon} alt="enviar"/>
            </div>
        </div>
    )
}

export default NotificationButton;
