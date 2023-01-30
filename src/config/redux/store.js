import { configureStore } from '@reduxjs/toolkit';
import main from './main/mainState';

export default configureStore({
  reducer: {
    main: main,
  },
});
