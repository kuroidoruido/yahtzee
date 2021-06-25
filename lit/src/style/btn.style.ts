import { css } from 'lit';

export const btnCss = css`
  .btn {
    display: flex;
    align-items: center;
    background-color: white;
    border: none;
    padding: 0px 16px 0px 8px;
    border-radius: 5px;
    cursor: initial;
  }
  .btn:not([disabled]):hover {
    background-color: rgba(189, 189, 189, 0.25);
    cursor: pointer;
  }
  .btn .icon {
    font-size: 200%;
    margin-right: 4px;
  }
`;
