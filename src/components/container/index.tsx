import { ReactNode } from "react";


interface props {
    children: ReactNode;
    className?: string;
}

const Container = (props:  props) => {
    return(
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default Container;