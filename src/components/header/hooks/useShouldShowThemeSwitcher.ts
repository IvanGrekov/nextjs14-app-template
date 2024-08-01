import { MOBILE_SIDEBAR_SCREEN_SIZES } from 'constants/mobileSidebarScreenSizes';
import { useWindowSize } from 'hooks/useWindowSize';

export const useShouldShowThemeSwitcher = (): boolean => {
    const windowSize = useWindowSize();

    return !MOBILE_SIDEBAR_SCREEN_SIZES.includes(windowSize);
};
