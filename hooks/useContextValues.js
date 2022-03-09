import { useContext } from 'react';
import { UiContext } from '../context/ui';

export const useContextValues = () => useContext(UiContext);
