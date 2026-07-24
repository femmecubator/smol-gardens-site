import React from 'react'
import styles from './Button.module.css'

type ButtonType = "button" | "submit" | "reset";

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  type?: ButtonType;
};

const Button = ({ children, type = "button", ...props
}: ButtonProps) => {
  return (
    <button {...props} type={type} className={styles.button}>{children}</button>
  )
}

export default Button