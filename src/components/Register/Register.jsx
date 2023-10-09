import { Link } from "react-router-dom";
import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import SocialAuth from "../SocialAuth/SocialAuth";
import useAuth from "../../hooks/useAuth/useAuth";
import toast from "react-hot-toast";

const Register = () => {
    const { handleCreateUser } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const terms = event.target.terms.checked;

        //password validation
        if (password.length < 6) {
            return toast.error("Password has to be at least 6 characters");
        } else if (!/^(?=.*[A-Z])(?=.*[0-9])/.test(password)) {
            return toast.error(
                "Password has to include at least 1 capital letter and 1 number"
            );
        }

        //creating user
        handleCreateUser(email, password)
            .then((res) => {
                console.log(res.user);
                toast.success("Account created successfully");
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.message);
            });
    };

    return (
        <div className=" flex w-full items-center justify-center">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="white">
                    Register
                </Typography>
                <Typography color="gray" className="font-normal">
                    Enter your details to Register.
                </Typography>
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                >
                    <div className="mb-4 flex flex-col gap-6">
                        <Input
                            required
                            className="text-white"
                            name="name"
                            type="text"
                            size="lg"
                            label="Name"
                        />
                        <Input
                            required
                            className="text-white"
                            name="img"
                            type="url"
                            size="lg"
                            label="Photo URL"
                        />
                        <Input
                            required
                            className="text-white"
                            name="email"
                            type="email"
                            size="lg"
                            label="Email"
                        />
                        <Input
                            required
                            className="text-white"
                            name="password"
                            type="password"
                            size="lg"
                            label="Password"
                        />
                    </div>
                    <Checkbox
                        name="terms"
                        required
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a href="#" className="font-semibold transition-colors">
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />

                    <Button
                        style={{
                            filter: `drop-shadow(3px 3px 20px rgba(255, 14, 31, .7))`,
                        }}
                        className="bg-[var(--red)] rounded-br-none rounded-tl-none w-fit p-0 block"
                    >
                        <input
                            className="py-3 px-6 cursor-pointer"
                            type="submit"
                            value="REGISTER"
                        />
                    </Button>

                    <SocialAuth />

                    <Typography color="gray" className="mt-4 text-left font-normal">
                        Already have an account?{" "}
                        <Link
                            to="/login-register/login"
                            className="font-medium text-gray-500"
                        >
                            <b>Login</b>
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
    );
};

export default Register;
