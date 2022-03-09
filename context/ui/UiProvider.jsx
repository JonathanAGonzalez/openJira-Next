import { useReducer } from 'react';
import { CLOSE_SIDE_MENU, OPEN_SIDE_MENU } from '../../types';
import { UiContext } from './';
import { uiReducer } from './UiReducer';

const II_INITIAL_STATE = {
  sideMenuOpen: false,
};

export const UiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, II_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({
      type: OPEN_SIDE_MENU,
    });
  };

  const closeSideMenu = () => {
    dispatch({
      type: CLOSE_SIDE_MENU,
    });
  };

  return (
    <UiContext.Provider value={{ ...state, openSideMenu, closeSideMenu }}>
      {children}
    </UiContext.Provider>
  );
};
