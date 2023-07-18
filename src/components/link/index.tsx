import { ReactNode } from "react";

interface props {
    href?: string;
    children?: ReactNode;
}

const Link = ( props : props) => {
    return (
        <a href={props.href} className="text-orange-500 hover:text-orange-200" >
            {props.children}
        </a>
    )
}

export default Link