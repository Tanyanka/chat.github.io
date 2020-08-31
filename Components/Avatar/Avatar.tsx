import React, { FC } from "react";
import classNames from 'classnames';

type Props = {
    type: 'primary' | 'secondary',
    img: string
}

 const Avatar: FC<Props> = ({ type, img}) => {
     return (
         <img className={ classNames('contact-user-photo avatar', {
             [`avatar--${type}`]: type
         }) } src={img} alt={name}/>
     )
 }
 export default Avatar;