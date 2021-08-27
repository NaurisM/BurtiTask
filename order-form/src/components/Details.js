import { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../data.json"

const Details = () => {
    const [propState, setPropState] = useState("");
    const { code } = useParams();
    const properties = Data.varieties.map((p) => p.code);
    const product = Data.items.find((item) => item.code === code);
    
    return ( 
        <form className="item-details">
            <h2>{ product.description }</h2>
            {properties.map((prop) => {
                const property = Data.varieties.find((attribute) => attribute.code === prop);
            
                if (product.varieties.includes(prop)) {
                    return (
                        <div className="choices">
                            <h5>{property.description}</h5>
                            <select 
                                className="dropdown" 
                                value={propState}
                                onChange={(e) => {
                                    const selectedAttr = e.target.value;
                                    setPropState(selectedAttr);
                                }}
                            >
                                {property.options.map((a) => (
                                    <option value={a.code}>{a.description}</option>
                                ))};
                            </select>
                        </div>
                    )
                }else{
                    return null;
                }
            }
            )}
            <input type="submit" value="Pasūtīt" />
            <h4>Preces kods: {product.code}.{propState}</h4>
        </form>
    );
}
 
export default Details;