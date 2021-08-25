import Data from "../data.json";

const Home = () => {
    return ( 
        <div className="home">
            {Data.items.map((item) => (
                <div className="item-preview" key={item.code}>
                    <h4>{ item.description }</h4>
                </div>
            ))}
        </div>
     );
}
 
export default Home;