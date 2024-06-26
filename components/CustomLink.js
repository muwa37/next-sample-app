import Link from 'next/link';
import styles from '../styles/CustomLink.module.css';

const CustomLink = ({ text, href }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className={styles.link}>{text}</a>
    </Link>
  );
};
export default CustomLink;
