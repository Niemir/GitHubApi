import styled from "styled-components";

interface StyledDescriptionProps {
  addSpacing?: boolean;
}
interface StyledDotProps {
  color?: string;
}

export const StyledElement = styled.li`
  display: flex;
  padding: 20px 0 16px;
  &:not(:last-child) {
    border-top: 1px solid ${(props) => props.theme.colors.lightGray};
  }
`;
export const StyledIcon = styled.div`
  flex-shrink: 0;
  margin-right: 8px;
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;
export const Content = styled.div``;

export const StyledTitle = styled.h2`
  color: ${(props) => props.theme.colors.blue};
  font-size: ${(props) => props.theme.fontSize.m};
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 2px;
`;
export const StyledDescription = styled.p<StyledDescriptionProps>`
  color: ${(props) => props.theme.colors.darkGray};
  font-size: ${(props) => props.theme.fontSize.m};
  font-weight: 500;
  line-height: 1.5;
  margin: ${({ addSpacing }) => (addSpacing ? "5px 0 15px" : "0")};
`;
export const StyledBio = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.s};
  font-weight: 500;
  line-height: 1.28;
  margin: 20px 0 8px;
`;
export const StyledInfo = styled.div`
  color: ${(props) => props.theme.colors.darkGray};
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: 500;
  line-height: 1.33;
  display: flex;
  flex-wrap: wrap;
  > div {
    display: flex;
    margin-right: 14px;
    line-height: 1.33;
    /* align-items: center; */
  }
  svg {
    margin-right: 3px;
  }
`;
export const StyledDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  flex-shrink: 0;
  margin-right: 3px;
`;
