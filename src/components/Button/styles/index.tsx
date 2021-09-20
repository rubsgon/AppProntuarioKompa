import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity(props => ({
    height: 50,
    backgroundColor: props.theme.colors.buttonPrimary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
}))

export const Text = styled.Text(props => ({
    fontFamily: props.theme.fonts.primary,
    fontSize: props.theme.fonts.size.title,
    color: props.theme.colors.textSecundary,
}))