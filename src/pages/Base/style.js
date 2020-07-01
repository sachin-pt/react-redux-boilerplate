import {css} from '@emotion/core'
export const seatStyle = (selected, booked, priceDiff) => [css`
  height: 20px;
  width: 20px;
  line-height: 20px;
  text-align: center;
  background: white;
  color: #000;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #000;
`, selected && css`
  background: gray;
  color: white;
`, booked && css`
  background: #e6e6e6;
  cursor: not-allowed;
  color: white;`, priceDiff && css`
  border-color: red;
  color: red;
`]

export const colStyle = css`
  display: inline-block;
  width: 20px;
  margin: 0 3px;
`

export const rowStyle = key => css`
  &:before {
    display: inline-block;
    vertical-align: top;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    content: '${key}';
  }
  margin: 3px 0;
`
export const classStyle = css`
  text-align: left;
  font-size: 14px;
  border-bottom: 1px solid #000;
  padding: 5px 0;
  margin: 10px 0;
`
export const containerStyle = columns => css`
    margin: auto;
    text-align: center;
    width: ${columns * 26 + 30}px;
`
