import styled from "styled-components";
import { darken, transparentize } from "polished"

export const Container = styled.form`
    h2 {
        color: var(--title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        background: #e7e9ee;
        border: 1px #d7d7d7;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text);
        }

        & + input {
            margin-top: 1rem;
        }

    }

    button[type="submit"]{
            width: 100%;
            background: var(--green);
            padding: 0 1.5rem;
            font-weight: 600;
            height:4rem;
            color: #ffff;
            border-radius: 0.25rem;
            border: 0;
            font-size: 1rem;
            margin-top: 1.5rem;

            transition: filter 0.2s;

            &:hover{
                filter: brightness(0.9);        
            }
        }
`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.25rem;

`


interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'red' | 'green'
};

const colors = {
    red: '#E52E4D',
    green: '#33CC95'
};

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: ${(props) => props.isActive
        ? transparentize(0.9, colors[props.activeColor])
        : 'transparent'
    };

        display: flex;
        align-items: center;
        justify-content: center;
        
        transition: border-color 0.2s;

        &:hover {
            border-color: ${darken(0.2, '#d7d7d7')};
        }

        img {
            height: 20px;
            width: 20px;
        }

        span {
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--title);

        }
`

