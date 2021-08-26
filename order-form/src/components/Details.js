import { useParams } from "react-router-dom";
import Data from "../data.json"

const Details = () => {
    const { code } = useParams();
    const product = Data.items.find((item) => item.code === code);
    const properties = Data.varieties.find((property) => property.code === "SIZE");
    //const property = Data.varieties.map((p) => p.code);

    // property.forEach((prop) => {
    //     const attributes = Data.varieties.find((attribute) => attribute.code === {prop});
    //         {(() => {
    //             if (product.varieties.includes(prop)) {
    //                 return (
    //                     <select name={prop} id={prop}>
    //                         {attributes.options.map((s) => (
    //                             <option value={s.description}>{s.description}</option>
    //                         ))}  
    //                     </select>
    //                 )
    //             }
    //         })()}
    //     }
    // )

    const AddProperties = (prop) => {
        const properties = Data.varieties.find((property) => property.code === prop);    
        
            if (product.varieties.includes(prop)) {
            return (
                <select name={prop} id={prop}>
                    {properties.options.map((s) => (
                        <option value={s.description}>{s.description}</option>
                    ))}  
                </select>
            )
        }
    }

    console.log(Data.varieties.map((p) => p.code));
    
    return ( 
        <div className="item-details">
            <h2>{ product.description }</h2>
            {(() => {
                if (product.varieties.includes('SIZE')) {
                    return (
                        <select name="size" id="size">
                            {properties.options.map((s) => (
                                <option value={s.description}>{s.description}</option>
                            ))}
                            
                        </select>
                    )
                }
            })()}
            {(() => {
                if (product.varieties.includes('COLOR')) {
                    return (
                        <div>Color exist</div>
                    )
                }
            })()}
            {(() => {
                if (product.varieties.includes('SHOE-SIZE')) {
                    return (
                        <div>Shoe size exist</div>
                    )
                }
            })()}
        </div>
     );
}
 
export default Details;