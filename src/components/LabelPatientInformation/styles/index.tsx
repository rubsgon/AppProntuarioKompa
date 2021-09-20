import styled from 'styled-components/native'

export const TextPatientInformation = styled.Text(props => ({
    fontFamily: props.theme.fonts.primary,
    fontSize: props.theme.fonts.size.primary,
    color: props.theme.colors.textPrimary,
    fontWeight: 'bold'
}))
