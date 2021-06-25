import { css } from 'lit';

export const selectCss = css`
  .select {
    display: flex;
    align-items: center;
    background-color: white;
    border: none;
    padding: 8px 8px 8px 8px;
    border-radius: 5px;
    cursor: initial;
  }
  .select:not([disabled]):hover {
    background-color: rgba(189, 189, 189, 0.25);
    cursor: pointer;
  }
`;
