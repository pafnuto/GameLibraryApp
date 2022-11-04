import React from 'react';
import Searchbar from '../Searchbar/Searchbar'

const Header = () => {
    return (
    <>
      <h1>Найди свою любимую игру</h1>
      <div>
          <Searchbar />
        <button>Поиск</button>
      </div>
    </>
    );
};

export default Header;