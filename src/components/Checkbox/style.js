import { css } from '@emotion/core'
import { minDesktopWidth } from 'constants/media'

export const dropDownStyle = css`
    margin: 16px;
    position: relative;
    width: calc(100% - 32px);
    @media (${minDesktopWidth}) {
        width: 400px;
    }
`


export const checkboxWrap = css`
    display: inline-block;
    width: 100%;
    @media (${minDesktopWidth}) {
        width: 500px;
    }
`
