import React from 'react';

import Header from '../Components/Header';
import Content from '../Components/Content';

function Home() {
  return (
        <React.Fragment>
            <Header />
            <Content />
        </React.Fragment>

    // <div className='home'>
    //   <h1>Home</h1>
    // </div>
  );
}

export default Home;