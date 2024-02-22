import styles from "./Footer.module.css"; 

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className={styles.footerLeftSide}>
            <div className={styles.logo}>
              <a href="#">mangcoding Store</a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              mollis, justo nec porttitor auctor, erat sapien faucibus lectus,
              vel tempor dolor augue et lectus.
            </p>
            <div className={styles.icons}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={3}
                height={7}
                viewBox="0 0 3 7"
                fill="none"
              ></svg>
            </div>
          </div>
          <div className={styles.footerRightSide}>
            <div className={styles.footerItem}>
              <h2>Home</h2>
              <nav>
                <a href="#">Product</a>
                <a href="#">Course</a>
                <a href="#">About Us</a>
                <a href="#">Log in</a>
              </nav>
            </div>
            <div className={styles.footerItem}>
              <h2>Home</h2>
              <nav>
                <a href="#">Product</a>
                <a href="#">Course</a>
                <a href="#">About Us</a>
                <a href="#">Log in</a>
              </nav>
            </div>
            <div className={styles.footerItem}>
              <h2>Home</h2>
              <nav>
                <a href="#">Product</a>
                <a href="#">Course</a>
                <a href="#">About Us</a>
                <a href="#">Log in</a>
              </nav>
            </div>
            <div className={styles.footerItem}>
              <h2>Home</h2>
              <nav>
                <a href="#">Product</a>
                <a href="#">Course</a>
                <a href="#">About Us</a>
                <a href="#">Log in</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
