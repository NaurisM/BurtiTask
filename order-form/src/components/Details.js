import { useParams } from "react-router-dom";
import Data from "../data.json"



const Details = () => {
    const { code } = useParams();
    const properties = Data.varieties.map((p) => p.code);
    const product = Data.items.find((item) => item.code === code);
    
    return ( 
        <div className="item-details">
            <h2>{ product.description }</h2>
            {properties.map((prop) => {
                const property = Data.varieties.find((attribute) => attribute.code === prop);
            
                if (product.varieties.includes(prop)) {
                    return (
                        <select name={prop} id={prop}>
                            {property.options.map((a) => (
                                <option value={a.description}>{a.description}</option>
                            ))};  
                        </select>
                    )
                }else{
                    return null;
                }
            }
            )}
        </div>
    );
}
 
export default Details;