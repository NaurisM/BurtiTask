import Data from "../data.json";
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="home">
            {Data.items.map((item) => (
                <div className="item-preview" key={item.code}>
                    <Link to={`/details/${item.code}`}>
                        <h4>{ item.description }</h4>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default Home;