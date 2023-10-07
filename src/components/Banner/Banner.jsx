import { Carousel } from "@material-tailwind/react";
import Slide from "./Slide/Slide";

const Banner = () => {
    return (
        <Carousel
            transition={{ duration: 1 }}
            autoplay={true}
            autoplayDelay={5000}
            loop={true}
            className="h-[calc(100vh-150px)]"
        >
            <Slide
                img="1"
                title="Welcome to Gaming Excellence"
                body="Join us for the gaming event of the year! Immerse yourself in thrilling competitions, epic battles, and unforgettable moments"
            />

            <Slide
                img="2"
                title="Compete, Connect, Conquer"
                body="Experience the thrill of competition, forge new friendships, and conquer the leaderboards. It's time to level up your gaming journey"
            />

            <Slide
                img="3"
                title="Stay Updated – Get Ready to Game"
                body="Don't miss out on the latest gaming news, exclusive events, and exciting announcements. Stay tuned for epic gaming adventures"
            />
        </Carousel>
    );
};

export default Banner;
