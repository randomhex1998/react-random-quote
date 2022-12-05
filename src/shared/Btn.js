const Button = ({cls , content , clkFunc}) => {
    <button className={cls} onClick={clkFunc}>{content}</button>
}


export default Button;