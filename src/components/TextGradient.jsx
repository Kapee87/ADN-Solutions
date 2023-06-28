function TextGradient({children, style}){
    style = "bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text " + style
    return(
        <strong className={style}>
            {children}
        </strong>
    )
};

export default TextGradient;