import { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../data.json"

const Details = () => {
    const [detailsState, setDetailsState] = useState("");
    const [sizeState, setSizeState] = useState("");
    const [colorState, setColorState] = useState("");
    const [shoeSizeState, setShoeSizeState] = useState("");
    const {code} = useParams();
    const properties = Data.varieties.map((property) => property.code);
    const product = Data.items.find((item) => item.code === code);

    const handleChange = (event) => {
        if (event.target.name === "SIZE") {
            setDetailsState(setSizeState(event.target.value));
        }
        if (event.target.name === "COLOR") {
            setDetailsState(setColorState(event.target.value));
        }
        if (event.target.name === "SHOE-SIZE") {
            setDetailsState(setShoeSizeState(event.target.value));
        }
    }

    return ( 
        <form className="item-details">
            <h2>{ product.description }</h2>
            {properties.map((attributes) => {
                const property = Data.varieties.find((attribute) => attribute.code === attributes);
            
                if (product.varieties.includes(attributes)) {
                    return (
                        <div className="choices">
                            <h5>{property.description}</h5>
                            <select 
                                className="dropdown"
                                name={attributes} 
                                value={detailsState}
                                onChange={handleChange}
                                >
                                    <option value={property.description}>
                                        {property.description}
                                    </option>
                                    {property.options.map((item) => (
                                    <option value={item.code}>
                                        {item.description}
                                    </option>
                                ))};
                            </select>
                        </div>
                    )
                } else {
                    return null;
                }
            }
            )}
            <h4>
                Preces kods: {product.code}
                {colorState !== "" ? `.${colorState}` : ""}
                {sizeState !== "" ? `.${sizeState}` : ""}
                {shoeSizeState !== "" ? `.${shoeSizeState}` : ""}
            </h4>
        </form>
    );
}
 
export default Details;