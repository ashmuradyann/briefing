import styled, { css } from 'styled-components';
import { Radio as radio } from 'antd';

const Radio = styled(radio)`
  ${props =>
    props.type === 'blue' &&
    css`
      .ant-radio-checked {
        .ant-radio-inner {
          border-color: #004bdc;

          &:after {
            background-color: #004bdc;
          }
        }
      }
      .ant-radio-wrapper:hover .ant-radio,
      .ant-radio:hover .ant-radio-inner,
      .ant-radio-input:focus + .ant-radio-inner {
        border-color: #004bdc;
      }
      .ant-radio-input:focus + .ant-radio-inner {
        box-shadow: 0 0 3px #004bdca3;
      }
    `}
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${props =>
    props.shadow &&
    css`
      box-shadow: ${props.shadow};
    `}
`;

export default Radio;
