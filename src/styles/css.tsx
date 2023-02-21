import { css } from "styled-components";

/**정가운데 정렬 */
export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainBg = css`
  width: 100%;
  height: 100vh;
  ${FlexCenter}
  flex-direction: column;
  background-color: #eee;
`;
