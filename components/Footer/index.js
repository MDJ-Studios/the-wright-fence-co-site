import styles from "./footer.module.css";

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
            <p>
                {/* TODO: add a scrollspy link to scroll to top of page */}
                Back to Top
            </p>
        </footer>
    );
}