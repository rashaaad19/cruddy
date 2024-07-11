import styled from "styled-components";

export const TextContainer=styled.div`
    color:#811493;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
h1,p{
    font-weight: 600;
}
img{
    width: clamp(300px, 50vw, 600px);
}

`