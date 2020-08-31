import React, { FC } from 'react';
import classNames from 'classnames';
import Avatar from "../Avatar";
import { TBots } from '../../types/types';
import styles from './Navigation.module.scss';
type Props = {
    bots: TBots[],
    activeId: number,
    onClick: (a: number) => void

};

const Navigation: FC<Props> = ({ bots, activeId, onClick }) => {

    return(
        <aside className={styles.contacts__wrap}>
            <ul className={styles.contact}>
                { bots && bots.map( ({ id, name, img }) => (
                    <li
                        className={classNames(styles.contact__user, {
                        'active': activeId === id
                    })} key={id}
                        onClick={ () => {
                            onClick(id)
                        } }
                    >
                        <Avatar type='primary' img={img} />
                        <span>{name}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Navigation;