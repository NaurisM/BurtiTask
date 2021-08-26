import { useParams } from "react-router-dom";
import Data from "../data.json"

const Details = () => {
    const { code } = useParams();
    const product = Data.items.find((item) => item.code === code);
    
    return ( 
        <div className="item-details">
            <h2>{ product.description }</h2>
        </div>
     );
}
 
export default Details;