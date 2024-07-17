import styles from "./Navbar.module.css"


export default function Navbar() {
    return (
        <nav className={`${styles.Navbar} container`}>
            <div className="logo">
                <img src="./images/Frame 2 1.jpg" alt="do something"/>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

