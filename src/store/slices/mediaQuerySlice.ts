import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MediaQueryState = {
    isXl: boolean;
    isLg: boolean;
    isMd: boolean;
    isSm: boolean;
};

const initialState: MediaQueryState = {
    isXl: false,
    isLg: false,
    isMd: false,
    isSm: false,
};

const mediaQuerySlice = createSlice({
    name: 'mediaQuery',
    initialState,
    reducers: {
        setMediaQuery(state, action: PayloadAction<Partial<MediaQueryState>>) {
            Object.assign(state, action.payload);
        },
    },
});

export const { setMediaQuery } = mediaQuerySlice.actions;
export default mediaQuerySlice.reducer;
