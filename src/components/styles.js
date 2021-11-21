import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.light};
  color: ${({ theme: { colors } }) => colors.success};
`;

export const ContainerSidebar = styled.aside`
  background-color: ${({ theme: { colors } }) => colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: scroll;
`;
