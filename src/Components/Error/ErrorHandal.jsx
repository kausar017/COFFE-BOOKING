import { Link } from "react-router-dom";

const ErrorHandal = () => {
    return (
        <div className="flex flex-col text-center items-center justify-center min-h-screen text-5xl font-bold">
            <h1>Opss!! Data not Found</h1>
            <p>400</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWru8q17zpOzzzT1s475ZS_8fOL1GS0teSw&s" alt="" />

            <div className="btn btn-success  mt-2">
                <Link to={'/'}>Go Back</Link>
            </div>
        </div>
    );
};

export default ErrorHandal;