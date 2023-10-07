import Marquee from "react-fast-marquee";
import HIghlightImage from "./HIghlightImage";

const Highlight = () => {
    return (
        <div className="shadow-[0_5px_10px_0_rgba(0,0,0,.35)] py-4 px-5 lg:px-0">
            <div
                style={{ backgroundImage: `url('/Grandmasters.png')` }}
                className="max-w-screen-xl mx-auto flex justify-center items-center px-4 bg-contain bg-no-repeat bg-center"
            >
                <Marquee autoFill={true} speed={25}>
                    <HIghlightImage img={1} />
                    <HIghlightImage img={2} />
                    <HIghlightImage img={3} />
                    <HIghlightImage img={4} />
                    <HIghlightImage img={5} />
                    <HIghlightImage img={6} />
                </Marquee>
            </div>
        </div>
    );
};

export default Highlight;
