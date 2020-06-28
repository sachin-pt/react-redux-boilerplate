import { Global } from '@emotion/core'

const global = `
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
    }
`

export const Core = () => (<Global styles={global} />)