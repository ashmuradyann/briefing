import styled, { css } from 'styled-components';
import { Col as col } from 'antd';

const Col = styled(col)`
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px!important;
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding}!important;
    `}
  ${props =>
    props.display &&
    css`
      display: ${props.display}!important;
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height}!important;
    `}
  ${props =>
    props.width &&
    css`
      width: ${props.width}!important;
    `}
  ${props =>
    props.max_height &&
    css`
      max-height: ${props.max_height}!important;
    `}
  ${props =>
    props.align &&
    css`
      display: flex;
      align-items: ${props.align}!important;
    `}
  ${props =>
    props.justify &&
    css`
      display: flex;
      justify-content: ${props.justify}!important;
    `}
  ${props =>
    props.direction &&
    css`
      display: flex;
      flex-direction: ${props.direction}!important;
    `}
  ${props =>
    props.border &&
    css`
      border: ${props.border};
    `}
  ${props =>
    props.border_right &&
    css`
      border-right: ${props.border_right};
    `}
  ${props =>
    props.border_top &&
    css`
      border-top: ${props.border_top};
    `}
  ${props =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${props =>
    props.overflow_y &&
    css`
      overflow-y: ${props.overflow_y};
    `}
  ${props =>
    props.shadow &&
    css`
      box-shadow: ${props.shadow};
    `}
  ${props =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
  ${props =>
    props.back_color &&
    css`
      background-color: ${props.back_color}!important;
    `}
  ${props =>
    (props.xxl_mb || props.xxl_mb === 0) &&
    css`
      @media screen and (min-width: 1600px) {
        margin-bottom: ${props.xxl_mb}px!important;
      }
    `}
`;

/** @component */
export default Col;
