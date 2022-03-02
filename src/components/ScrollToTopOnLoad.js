import React, { useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnLoad = ({ history, children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <Fragment>{children}</Fragment>;
}

export default ScrollToTopOnLoad;