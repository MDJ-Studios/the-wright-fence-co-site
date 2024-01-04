import styles from "./footer.module.css";
import handleScroll from "@/utils/handleScroll";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; All Rights Reserved {new Date().getFullYear()}</p>
            <h4>The Wright Fence Co.</h4>
            <p>
                <a href="tel:1-682-260-9080">682-260-9080</a>
            </p>
            <section>
                {/* TODO: Add social media icon/links here */}
            </section>
            <p onClick={() => handleScroll("top")}>
                Back to Top
            </p>
        </footer>
    );
}