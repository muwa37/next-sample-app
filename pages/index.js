import CustomLink from '../components/CustomLink';

const Index = () => {
  return (
    <div>
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
      <h1>main page</h1>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
            display: flex;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
