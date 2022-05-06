import {
  createSlice
} from '@reduxjs/toolkit';

interface HeaderState {
  title: string;
}

const initialState: HeaderState = {
  title: 'SHOGun Demo Client'
};

export const slice = createSlice({
  name: 'header',
  initialState,
  reducers: {}
});

export default slice.reducer;
