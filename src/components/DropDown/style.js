
import { css } from '@emotion/core'
import { minDesktopWidth } from 'constants/media'

export const dropDownStyle = css`
    position: relative;
    z-index: 1;
`

export const defaultInpStyle = (isOpen) => css`
    padding: 8px 12px;
    border: 1px solid #000;
    border-radius: 4px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    &::after {
        ${isOpen? `content: "▲"` : `content: "▼"`};
        font-size: 12px;        
        margin-left: 24px;
        display: inline-block;
        position: absolute;
        right: 12px;
    }
`

export const optionsWrapStyle = css`
    background-color: #fff;
    position: absolute;
    z-index: 1;
    width: 100%;
    border: 1px solid #eee;
    cursor: pointer;
    margin-top: 4px;
    box-shadow: 0px 2px 2px 0px #cccc;
    max-height: 400px;
    overflow: auto;
`
const colorOption = css`
    background: #5e23dc;
    color: #fff;
`
export const optionStyle = (selected) => css`
    ${selected && colorOption}
    padding: 8px 12px;
    border: 1px solid #eee;
    &:hover {
        @media (${minDesktopWidth}) {
            background: #999;
            color: #fff;
        }
    }
`

export const filterInpStyle = css`
    width: calc(100% - 16px);
    height: 30px;
    padding: 8px;
    font-size: 16px;
    line-height: 34px;
    background-color: transparent;
    color: #5591F4;
    margin: 8px;
    &::placeholder {
        color: rgba(0, 0, 0, 0.3);
    }
`
