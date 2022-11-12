import React from 'react';
import { BiSearchAlt } from "react-icons/bi";
import { Flex, Spacer } from '@chakra-ui/react'

interface INavProps {
    toggle: (e: boolean) => void;
    openModal: () => void;
  }

export const Navbar: React.FC<INavProps> = ({ toggle, openModal})=> {
    return (
        <Flex>
        <BiSearchAlt
          fontSize="large"
          onClick={() => toggle(false)}
        />
        <button onClick={() => openModal()}>
          Добавить игру
        </button>
      </Flex>
    );
};

