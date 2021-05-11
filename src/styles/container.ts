import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { media } from '~/styles';

export const container = css`
  width: 94rem;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  padding: 0 2rem;
  /* ${media.tablet} {
    padding: 0 2rem;
  } */
`
export const Container = styled.div`
  ${container}
`
