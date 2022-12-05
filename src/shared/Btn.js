export const Btn = ({cls , content , clkFunc}) => {
    return(
        <button type="button" className={cls} onClick={clkFunc}>{content}</button>
    )
}