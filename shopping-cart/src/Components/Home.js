import { CartState } from "../Context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import "./style.css";
const Home = () => {
  const {
    state: { prodcuts_g },
  } = CartState();
  console.log(prodcuts_g);
  return (
    <div className="Home">
      <Filters />
      <div className="ProductContainers">
        {prodcuts_g.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
