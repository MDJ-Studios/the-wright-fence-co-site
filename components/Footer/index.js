import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import styles from "./footer.module.css";
import handleScroll from "@/utils/handleScroll";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; All Rights Reserved {new Date().getFullYear()}</p>
            <h3>The Wright Fence Co.</h3>
            <section>
                <a href="https://www.facebook.com/TCBAutoSpa/" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} size="2x" /> Check us Out!
                </a>
                <p>
                    <a href="tel:1-682-260-9080"><FontAwesomeIcon icon={faPhone} size="2x" /> 682-260-9080</a>
                </p>
            </section>
            <p onClick={() => handleScroll("top")}>
                Back to Top
            </p>
        </footer>
    );
}