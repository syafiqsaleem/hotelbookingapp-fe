import { useState, useEffect } from "react";
import { allHotels } from "../actions/hotel";
import SmallCard from "../components/cards/SmallCard";

const Home = () => {
  // // destructure state => { user }
  // const { auth } = useSelector((state) => ({ ...state }));
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    loadAllhotels();
  }, []);

  const loadAllhotels = async () => {
    let res = await allHotels();
    setHotels(res.data);
  };
  return (
    <>
      <div className="container-fluid p-5 text-center">
        <h1>All Hotels</h1>
      </div>

      <div className="container-fluid">
        <br />
        {/* <pre>{JSON.stringify(hotels, null, 4)}</pre> */}
        {hotels.map((h) => (
          <SmallCard key={h._id} h={h} />
        ))}
      </div>
    </>
  );
};

export default Home;
