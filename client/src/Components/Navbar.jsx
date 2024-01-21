import { IoIosSettings, IoIosAddCircle, IoMdPerson, IoIosHome, IoIosChatboxes } from "react-icons/io";
import axios from "axios";

// TODO Fix tooltip not appearing on hover (has to do with Stacking and fixed positions...)
export default function Navbar() {
    const handleClick = async () => {
        try {
            const res = await axios.get(`//localhost:3000/`);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col bg-dark1 text-white shadow-lg">
            <div onClick={handleClick} >
                <NavIcon icon={<IoIosHome size="28" />} text="Placeholder Chat" />
                <NavIcon icon={<IoIosAddCircle size="28" />} text="New" /> 
            </div>
            <div className="mt-4">
                
                <NavIcon icon={<IoIosChatboxes size="28" />} text="Placeholder Chat" />
                <NavIcon icon={<IoIosChatboxes size="28" />} text="Placeholder Chat" />
                <NavIcon icon={<IoIosChatboxes size="28" />} text="Placeholder Chat" />
            </div>
            <div className="mt-auto">
                <div className="flex-grow border-t border-white"></div>
                <NavIcon icon={<IoIosSettings size="28" />} text="Settings" />
                <NavIcon icon={<IoMdPerson size="28" />} text="Profile" />
            </div>
        </div>
    )
}

const NavIcon = ({ icon, text = 'tooltip' }) => (
    <div className="nav-icon group">
        {icon}
        <span className="nav-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)