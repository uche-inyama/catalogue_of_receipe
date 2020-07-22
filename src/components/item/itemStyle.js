import styled from 'styled-components'


export const ItemWrap = styled.div`
  div{
    a {
      height: 200px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .image {
        width: 90%;
        height: 90%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
      }
    }
    .receipe_category {
      font-weight: 400;
      font-family: "sans-serif", Roboto;
      text-align: left;
      padding: 0 5% ;
      color: #fcda9a;
    }
  }
`