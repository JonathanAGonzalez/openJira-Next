import { OPEN_SIDE_MENU, CLOSE_SIDE_MENU } from '../../types';

export const uiReducer = (state, action) => {
  switch (action.type) {
    case OPEN_SIDE_MENU:
      return {
        ...state,
        sideMenuOpen: true,
      };

    case CLOSE_SIDE_MENU:
      return {
        ...state,
        sideMenuOpen: false,
      };

    default:
      return state;
  }
};
