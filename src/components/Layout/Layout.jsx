import React from 'react';

import s from './Layout.module.css';

const Layout = ({id, title, descr, urlBg, colorBg, children}) => {
    return (
        <section className={s.root}
                 style={{background: `url(${urlBg})`, backgroundColor: colorBg} }

                 id={id}>
            <div className={s.wrapper}>
                <article >
                    <div className={s.title}>
                        {title && <h3>{title}</h3>}
                        <span className={s.separator}></span>
                    </div>
                    <div className={(s.desc + ' ' + s.full)}>
                        {children &&
                        <p>{children}</p>
                        }
                    </div>
                </article>
            </div>

        </section>
    );
};

export default Layout;