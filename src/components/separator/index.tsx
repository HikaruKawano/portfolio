
interface props {
    orientation?: 'vertical' | 'horizontal';
    className?: string;
}

const Separator = (props: props) => {
    
    const className = props.orientation === 'horizontal' ? 'h-[1px] w-full bg-zinc-600' :  'w-[1px] bg-zinc-600';
    const additionalClassName = props.className ?? '';
    const combinedClassName = `${className} ${additionalClassName}`;
    return(
        <div className={ combinedClassName } ></div>
    )
}

export default Separator