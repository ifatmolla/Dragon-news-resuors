import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Social = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Login With</h2>
            <div className="*:w-full space-y-2">
                <button className='btn btn-primary flex items-center gap-2 font-semibold'><FaGoogle />Login With Google</button>
                <button className=' flex items-center gap-2 font-semibold btn-primary btn '>
                <FaGithub /> Login With Github
                    </button>
            </div>
        </div>
    );
};

export default Social;