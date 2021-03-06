import styled, { css } from 'styled-components';
import { Input } from 'antd';

const TextArea = styled(Input.TextArea)`
  background: #ffffff;
  border: 2px solid #75778A;
  box-sizing: border-box;
  border-radius: 10px;
  height: 150px;
  padding: 10px 50px 10px 10px;
  font-weight: 300;

  &:after {
    content: attr(length);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &::placeholder {
    color: #D9DBE9;
    font-size: 18px;
    font-weight: 400;
  }

  &:hover {
    border-color: #75778A;
  }
  &:focus,
  &.ant-input-focused {
    border-color: #000 !important;
    outline: 0;
    box-shadow: 0 0 0 4px #9dbaff;
  }
  &[disabled] {
    color: #00000096;
    background-color: #fff;
    border: 1px solid #eeeeee;
  }
  ${props =>
    props.type === 'blue' &&
    css`
      border: 1px solid #004bdc !important;
    `}
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px!important;
    `}
  ${props =>
    props.min_height &&
    css`
      min-height: ${props.min_height}!important;
    `}
  ${props =>
    props.max_height &&
    css`
      max-height: ${props.max_height}!important;
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
    props.height &&
    css`
      height: ${props.height}!important;
    `}
  ${props =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${props =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
  ${props =>
    props.border &&
    css`
      border: ${props.radius};
    `}
`;

export default TextArea;
