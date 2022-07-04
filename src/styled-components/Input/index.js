import styled, { css } from 'styled-components';
import { Input as input } from 'antd';

const Input = styled(input)`
  background: #fff;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  //border-radius: 50px;
  //height: 44px;
  height: 35px;
  padding: 0 15px;
  font-weight: 400;

  &:hover {
    border-color: #886cc0;
  }
  &:focus,
  &.ant-input-focused {
    border-color: #886cc0;
    outline: 0;
    box-shadow: 0 0 0 2px #886cc02e;
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
    props.input_padding &&
    css`
      input {
        padding: ${props.input_padding}!important;
      }
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
    props.disabled_cursor &&
    css`
      &[disabled] {
        cursor: ${props.disabled_cursor};
      }
    `}
  ${props =>
    props.disabled_color &&
    css`
      &[disabled] {
        color: ${props.disabled_color};
      }
    `}
  ${props =>
    props.fz &&
    css`
      input {
        font-size: ${props.fz};
      }
    `}
  ${props =>
    props.fw &&
    css`
      input {
        font-weight: ${props.fw};
      }
    `}
  ${props =>
    props.color &&
    css`
      input {
        color: ${props.color}!important;
      }
    `}
  ${props =>
    props.placeholder_color &&
    css`
      input {
        &::placeholder {
          color: ${props.placeholder_color};
          opacity: 1;
        }

        &:-ms-input-placeholder {
          color: ${props.placeholder_color};
        }

        &::-ms-input-placeholder {
          color: ${props.placeholder_color};
        }
      }
    `}
  ${props =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
`;

export default Input;
