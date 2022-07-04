import styled, { css } from 'styled-components';
import { Button as button } from 'antd';
import propTypes from 'prop-types';

const Button = styled(button)`
  background: #886cc0;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.35);
  //border-radius: 50px;
  //height: 44px;
  height: 35px;
  border: none;
  font-weight: 500;
  color: #fff;
  //padding: 8px 16px;
  padding: 0 16px;
  font-size: 14px;
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `}
  ${props =>
    props.fw &&
    css`
      font-weight: ${props.fw};
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${props =>
    props.color &&
    css`
      color: ${props.color}!important;
    `}
  ${props =>
    props.decoration &&
    css`
      span {
        text-decoration: ${props.decoration}!important;
      }
    `}
  ${props =>
    props.icon_height &&
    css`
      svg {
        height: ${props.icon_height}!important;
      }
    `}
  ${props =>
    props.type === 'primary' &&
    css`
      background: #886cc0;
      &:hover {
        background: #756399;
        color: #fff;
      }
      &:active {
        background: #886cc0;
        color: #fff;
      }
      &:focus {
        background: #886cc0;
        color: #fff;
      }
      &[disabled] {
        background: #e7e7e7;
        color: #616161;
      }
    `}
  ${props =>
    props.type === 'blue' &&
    css`
      background: #004bdc;

      &:hover {
        background: #0202a5;
        color: #fff;
      }

      &:active {
        background: #004bdc;
        color: #fff;
      }

      &:focus {
        background: #004bdc;
        color: #fff;
      }

      &[disabled] {
        background: #004bdc;
        color: #616161;
      }
    `}
  ${props =>
    props.type === 'white' &&
    css`
      background: #fff;
      color: #004bdc;
      &:hover {
        background: #fff;
        color: #004bdc;
      }

      &:active {
        background: #fff;
        color: #004bdc;
      }

      &:focus {
        background: #fff;
        color: #004bdc;
      }

      &[disabled] {
        background: #fff;
        color: #616161;
      }
    `}
  ${props =>
    props.type === 'grey' &&
    css`
      background: #c4c4c4;
      color: #fff;

      &:hover {
        background: #0202a5;
        color: #fff;
      }

      &:active {
        background: #c4c4c4;
        color: #fff;
      }

      &:focus {
        background: #c4c4c4;
        color: #fff;
      }

      &[disabled] {
        background: #c4c4c4;
        color: #616161;
      }
    `}
  ${props =>
    props.type === 'primary_grey' &&
    css`
      background: #c4c4c4;
      color: #593b93;
      border: 1px solid #593b93;

      &:hover {
        background: #c4c4c4;
        color: #593b93;
        border-color: #593b93;
      }

      &:active {
        background: #c4c4c4;
        color: #593b93;
        border-color: #593b93;
      }

      &:focus {
        background: #c4c4c4;
        color: #593b93;
        border-color: #593b93;
      }

      &[disabled] {
        background: #c4c4c4;
        color: #616161;
      }
    `}
  ${props =>
    props.sectype === 'ghost' &&
    css`
      color: #886cc0;
      background: transparent;
      box-shadow: none;
      &:hover {
        background: transparent;
        color: #756399;
      }
      &:active {
        background: transparent;
        color: #756399;
      }
      &:focus {
        background: transparent;
        color: #756399;
      }
    `}
  ${props =>
    props.sectype === 'blue_ghost' &&
    css`
      color: #004bdc;
      background: transparent;
      box-shadow: none;
      &:hover {
        background: transparent;
        color: #004bdc;
      }
      &:active {
        background: transparent;
        color: #004bdc;
      }
      &:focus {
        background: transparent;
        color: #004bdc;
      }
    `}
  ${props =>
    props.sectype === 'secondary' &&
    css`
      color: #717579;
      &:hover {
        color: #717579;
      }
      &:active {
        color: #717579;
      }
      &:focus {
        color: #717579;
      }
    `}
  ${props =>
    props.type === 'blue_outline' &&
    css`
      background: none;
      border: 1px solid #004bdc;
      color: #004bdc;
      &:hover {
        color: #004bdc;
        border-color: #004bdc;
      }
      &:active {
        color: #004bdc;
        border-color: #004bdc;
      }
      &:focus {
        color: #004bdc;
        border-color: #004bdc;
      }
    `}
  ${props =>
    props.type === 'outline' &&
    css`
      background: none;
      border: 1px solid ${props.bordercolor};
      //border-radius: 50px;
      color: #886cc0;
      &:hover {
        color: #6138fb;
        border-color: #6138fb;
      }
      &:active {
        color: #886cc0;
        border-color: #886cc0;
      }
      &:focus {
        color: #886cc0;
        border-color: #886cc0;
      }
    `}
  ${props =>
    props.type === 'dark_outline' &&
    css`
      background: #fff;
      border: 1px solid #eeeeee;
      //border-radius: 10px;
      color: #171b1e;
      box-shadow: none;
      &:hover {
        color: #171b1e;
        border-color: #171b1e;
      }
      &:active {
        color: #171b1e;
        border-color: #171b1e;
      }
      &:focus {
        color: #171b1e;
        border-color: #171b1e;
      }
    `}
  ${props =>
    props.type === 'white_outline' &&
    css`
      background: transparent;
      border: 1px solid #fff;
      color: #fff;
      box-shadow: none;
      &:hover {
        color: #fff;
        background: transparent;
        border-color: #fff;
      }
      &:active {
        color: #fff;
        border-color: #fff;
        background: transparent;
      }
      &:focus {
        color: #fff;
        border-color: #fff;
        background: transparent;
      }
    `}
  ${props =>
    props.type === 'black_outline' &&
    css`
      background: #fff;
      border: 1px solid #171b1e;
      color: #171b1e;
      box-shadow: none;
      &:hover {
        color: #171b1e;
        border-color: #171b1e;
      }
      &:active {
        color: #171b1e;
        border-color: #171b1e;
      }
      &:focus {
        color: #171b1e;
        border-color: #171b1e;
      }
    `}
  ${props =>
    props.type === 'destructive' &&
    css`
      background: #f8817b;
      border: 1px solid #f8817b;
      //border-radius: 10px;
      color: #fff;
      box-shadow: none;
      &:hover {
        color: #ff4f46;
        border-color: #ff4f46;
      }
      &:active {
        color: #ff4f46;
        border-color: #ff4f46;
      }
      &:focus {
        color: #ff4f46;
        border-color: #ff4f46;
      }
    `}
  ${props =>
    props.type === 'grey_destructive' &&
    css`
      border: 1px solid #c4c4c4;
      box-shadow: none;
      color: #ff2222;
      background: #c4c4c4;
      &:hover {
        color: #ff2222;
        background: #c4c4c4;
        border: 1px solid #c4c4c4;
      }
      &:active {
        color: #ff2222;
        background: #c4c4c4;
        border: 1px solid #c4c4c4;
      }
      &:focus {
        color: #ff2222;
        background: #c4c4c4;
        border: 1px solid #c4c4c4;
      }
    `}
  ${props =>
    props.type === 'destructive_outline' &&
    css`
      background: #fff;
      border: 1px solid #f8817b;
      //border-radius: 10px;
      color: #f8817b;
      box-shadow: none;
      &:hover {
        color: #ff4f46;
        border-color: #ff4f46;
      }
      &:active {
        color: #ff4f46;
        border-color: #ff4f46;
      }
      &:focus {
        color: #ff4f46;
        border-color: #ff4f46;
      }
    `}
  ${props =>
    props.type === 'grey_ghost' &&
    css`
      color: #717579;
      background: transparent;
      box-shadow: none;
      &:hover {
        background: transparent;
        color: #717579;
      }
      &:active {
        background: transparent;
        color: #717579;
      }
      &:focus {
        background: transparent;
        color: #717579;
      }
    `}
  ${props =>
    props.type === 'dark_ghost' &&
    css`
      color: #171b1e;
      background: transparent;
      box-shadow: none;
      &:hover {
        background: transparent;
        color: #171b1e;
      }
      &:active {
        background: transparent;
        color: #171b1e;
      }
      &:focus {
        background: transparent;
        color: #171b1e;
      }
    `}
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${props =>
    props.color &&
    css`
      color: ${props.color}!important;
    `}
  ${props =>
    props.display &&
    css`
      display: ${props.display}!important;
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
    props.line_height &&
    css`
      line-height: ${props.line_height}!important;
    `}
`;

Button.propTypes = {
  type: propTypes.string,
};

Button.defaultProps = {};

/** @component */
export default Button;
