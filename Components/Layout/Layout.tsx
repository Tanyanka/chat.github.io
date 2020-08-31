import React, { FC, ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import classNames from 'classnames';

type Props = {
    slug?: string,
    className?: string,
    children?: ReactNode
}
const Layout: FC<Props> = ({ slug, className, children }) => {

    const indemnification = `m-page--${slug}`;

    return (
        <div className={classNames("m-page", {
            [indemnification as string]: slug,
            [className as string]: className
        })}>
            <Header />
                { children }
            <Footer />
        </div>
    )
}

export default Layout;