import styled from "styled-components"
import { TareaProps } from "../types/props"

export const FormContainer = styled.div`
    background-color: #593F62;
    font-family: 'Poppins', sans-serif;
`
export const FormStyle = styled.div`
    max-width: 1300px;
    margin: auto;
    position: relative;
`
export const FormTarea = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0rem;
`

export const Select = styled.select`
    max-width: 10rem;
    font-size: 1.1rem;
    padding: 0.3rem;
    cursor: pointer;
    margin-left: 1rem;
    z-index: 75;
`

export const Tarea = styled.div<TareaProps>`
    position: absolute;
    top: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    top: ${props => props.state? "" : "-155%"};
    background-color: ${props => props.state? "#593F62" : ""};
    border-radius: 0rem 0rem 0.5rem 0.5rem;
    z-index: 50;
`

export const BtnVer = styled.span`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 4rem;
    top: 100%;
    text-align: center;
    background-color: #593F62;
    cursor: pointer;
    color: white;
    border-radius: 0rem 0rem 0.5rem 0.5rem;
    font-size: 1.2rem;
`

export const Input = styled.input<TareaProps>`
    padding: 0.3rem;
    opacity: ${props => props.state? "1": "0"} ;
`

export const TextArea = styled.textarea<TareaProps>`
    resize: none;
    padding: 0.3rem;
    opacity: ${props => props.state? "1": "0"} ;
`
export const Btn = styled.button<TareaProps>`
    padding: 0.3rem;
    opacity: ${props => props.state? "1": "0"} ;
`