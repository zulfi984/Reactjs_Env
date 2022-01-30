import { CartState } from "../Context/Context";

const Home = () => {
  const {
    state: { prodcuts_g },
  } = CartState();
  console.log(prodcuts_g);
  return <div className="Home"></div>;
};

export default Home;
