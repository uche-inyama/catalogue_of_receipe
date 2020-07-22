import styled from 'styled-components';

const media = {
  largeScreen: ` @media(min-width: 768px)`,
  desktop: `@media(min-width: 992px)`
}

export const ItemListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px 10px;
  list-style: none;
  ${media.largeScreen}{
    grid-template-columns: repeat(3, 1fr);
  }
  ${media.desktop}{
    grid-template-columns: repeat(4, 1fr);
  }
  > div {
    border: 1px solid gray;
  }
`;