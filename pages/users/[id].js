import { useRouter } from 'next/router';
import styles from '../../styles/user.module.scss';

export default function () {
  const { query } = useRouter();

  return (
    <div className={styles.user}>
      <h1>
        user with id: <i>{query.id}</i>
      </h1>
    </div>
  );
}
