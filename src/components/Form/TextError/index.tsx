import styled from 'styled-components'

export const TextError = styled.Text(props => ({
    marginTop: 5,
    marginRight: 10,
    textAlign: 'right',
    color: props.theme.colors.buttonPrimary
}))
