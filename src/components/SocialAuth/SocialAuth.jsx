import { Button } from "@material-tailwind/react";
import useAuth from "../../hooks/useAuth/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialAuth = () => {
    const navigate = useNavigate();
    const { handleGoogleAuth } = useAuth();

    const handleSocialLogin = (media) => {
        media()
            .then((res) => {
                toast.success("Google login successful");
                navigate("/");
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
            <hr className="my-3" />
            <Button
                onClick={() => handleSocialLogin(handleGoogleAuth)}
                size="lg"
                variant="outlined"
                color="blue-gray"
                className="flex items-center gap-3 w-full justify-center mt-4"
            >
                <img
                    src="https://www.material-tailwind.com/icons/google.svg"
                    alt="metamask"
                    className="h-6 w-6"
                />
                Continue with Google
            </Button>
        </>
    );
};

export default SocialAuth;
