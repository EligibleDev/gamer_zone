import PropTypes from "prop-types";
import { useCountUp } from "react-countup";

const CounterSec = () => {
    const Counter = ({ number, id }) => {
        useCountUp({ ref: id, end: number, enableScrollSpy: true });
        return <span id={id} />;
    };

    const CounterBlock = ({ number, title, id }) => {
        return (
            <div className="text-center">
                <h1 className="text-7xl font-bold">
                    <Counter number={number} id={id} />
                </h1>
                <p className="uppercase font-bold text-white">{title}</p>
            </div>
        );
    };

    return (
        <div className="bg-[url('/counter-bg.jpg')] bg-fixed bg-no-repeat bg-cover bg-center">
            <div className="max-w-screen-xl mx-auto grid grid-cols-2 lg:grid-cols-4 justify-around items-center h-96">
                <CounterBlock number={180} title="GAMES PLAYED" id="games-played" />
                <CounterBlock number={89} title="FLAGS TAKEN" id="flags-taken" />
                <CounterBlock number={32} title="DEATH MATCHES" id="death-matches" />
                <CounterBlock number={17} title="TOURNAMENTS" id="tournaments" />
            </div>
        </div>
    );
};

CounterSec.propTypes = {
    number: PropTypes.number,
    title: PropTypes.string,
    id: PropTypes.string,
};
export default CounterSec;
