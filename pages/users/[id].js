import styles from '../../styles/user.module.scss';

const user = ({ user }) => {
  return (
    <div className={styles.user}>
      <h1>
        user with id: <i>{user.id}</i>
      </h1>

      <h2>
        user name: <i>{user.name}</i>
      </h2>
    </div>
  );
};

export default user;

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();

  return {
    props: { user },
  };
}
