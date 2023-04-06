import { InputHTMLAttributes } from "react"
import { InputStyled } from "./styles"

type InputProps = InputHTMLAttributes<HTMLInputElement> 

export function Input({...props}: InputProps) {
    return (
        <InputStyled {...props} />
    )
}