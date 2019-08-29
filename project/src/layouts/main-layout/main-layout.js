import React from 'react';

import './main-layout.scss';

const MainLayout = (props) => {
  return (
    <div>
      <div className='wrapper'>
        <div className="main-content">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
