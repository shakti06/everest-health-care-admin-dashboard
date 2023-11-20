import Image from "next/image";
import {MdSearch,MdNotifications} from "react-icons/md";

import styles from "./navbar.module.css";

const Navbar = () =>{
    return(
    <div className={styles.container}>
        <div className={styles.logo}>
            <Image src="next.svg" alt="everest health care admin" width={50} height={50}/>
            <span>Everest Health</span>
        </div>
        <div className={styles.menu}>
            <div className={styles.searchInput}>
                <MdSearch/>
                <input type="text" placeholder = "Search ..." className={styles.input}/>
            </div>
            <div className={styles.icons}>
                <MdNotifications/>
                <Image src="next.svg" alt="user pic" width={50} height={50}/>
            </div>
        </div>
    </div>
    )
}

export default Navbar;