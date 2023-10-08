import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import CallToAction from "../../components/CallToAction/CallToAction";
import CounterSec from "../../components/CounterSec/CounterSec";
import Highlight from "../../components/Highlight/Highlight";
import Services from "../../components/Services/Services";

const Home = () => {
      

      const data = useLoaderData();

      return (
            <>
                  <Banner/>
                  <Highlight/>
                  <CallToAction/>
                  <Services data={data}/>
                  <CounterSec/>
            </>
      );
};

export default Home;