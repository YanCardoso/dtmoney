import styled from "styled-components";

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