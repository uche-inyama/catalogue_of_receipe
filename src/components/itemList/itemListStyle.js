import styled from 'styled-components';

const media = {
  desktop: ` @media(min-width: 768px)`
}

export const ItemListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px 10px;
  list-style: none;
  ${media.desktop}{
    grid-template-columns: repeat(3, 1fr);
  }
  > div {
    border: 1px solid gray;
  }
`;