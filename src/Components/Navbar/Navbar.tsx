import React from 'react';
import { BiSearchAlt } from "react-icons/bi";

interface INavProps {
    toggle: (e: boolean) => void;
    openModal: () => void;
  }

const Navbar: React.FC<INavProps> = ({ toggle, openModal})=> {
    return (
      <>
        <BiSearchAlt
          fontSize="large"
          onClick={() => toggle(false)}
        />
        <button onClick={() => openModal()}>
          Добавить игру
        </button>
       </> 
    );
};

export default Navbar;