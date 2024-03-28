import Head from 'next/head';
import CustomLink from '../components/CustomLink';

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={'sample-keyword, next.js' + keywords}></meta>
        <title>main page</title>
      </Head>
      <div className='navbar'>
        <ul>
          <li>
            <CustomLink href={'/'} text={'main'} />
          </li>
          <li>
            <CustomLink href={'/users'} text={'users'} />
          </li>
        </ul>
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
