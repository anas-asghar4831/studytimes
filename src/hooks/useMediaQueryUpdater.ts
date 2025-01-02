import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useAppDispatch } from '../store/hooks';
import { setMediaQuery } from '../store/slices/mediaQuerySlice';

const useMediaQueryUpdater = () => {
    const dispatch = useAppDispatch();

    const isXl = useMediaQuery({ query: '(min-width: 1280px)' });
    const isLg = useMediaQuery({ query: '(min-width: 1024px)' });
    const isMd = useMediaQuery({ query: '(min-width: 768px)' });
    const isSm = useMediaQuery({ query: '(min-width: 640px)' });

    useEffect(() => {
        dispatch(
            setMediaQuery({
                isXl,
                isLg,
                isMd,
                isSm,
            })
        );
    }, [dispatch, isXl, isLg, isMd, isSm]);
};

export default useMediaQueryUpdater;
