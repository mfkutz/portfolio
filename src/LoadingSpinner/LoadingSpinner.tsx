import { HashLoader } from "react-spinners";

export default function LoadingSpinner() {
    return (
        <div className="flex bg-gray-950 h-screen justify-center items-center">
            <HashLoader color="#d7149a" />
        </div>
    )
}
