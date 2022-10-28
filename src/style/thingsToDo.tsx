import styled from "styled-components";

export const Thing = styled.div`
    flex: 1 1 20rem;
    background-color: #f2f2f4;
    display: flex;
    border-radius: 0.8rem;
    padding: 0.8rem;
    font-family: 'Poppins', sans-serif;
    height: auto;
    position: relative;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: space-between;
`

export const Details = styled.div`
    display: flex;
    gap: 1rem;
`

export const Description = styled.p`
    width: 100%;
`
export const Done = styled.span`
    background-color: #06d306;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem;
    border-radius: 0.3rem;
    color: white;
    cursor: pointer;
`