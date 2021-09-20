import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: object,
        fonts: {
            size: object
        }
    }
}
