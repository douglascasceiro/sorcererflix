import React from 'react';
import Button from '../Button';

function ButtonLink(props) 
{
    return (
        <Button as="a" className={props.className} href={props.href}>
            {props.children}
        </Button>
    );
}

export default ButtonLink;