import { useSelector } from 'react-redux';
import { getIsLoggedIn, getRefreshing } from 'redux/auth/authSelectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isRefreshing = useSelector(getRefreshing);

    return {
        isLoggedIn,
        isRefreshing,
    };
};