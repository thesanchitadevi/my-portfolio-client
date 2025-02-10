import styles from "./About.module.css";

export const metadata = {
  title: "About Us",
  description: "This is the about page",
};

const AboutPage = () => {
  return <div className={styles.text_color}>This is About page</div>;
};

export default AboutPage;
