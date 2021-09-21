import styled from 'styled-components/native'

export const Container = styled.View((props) => ({
  backgroundColor: props.theme.colors.blackgreen,
  height: 50,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  justifyContent: 'center',
  paddingLeft: 10,
}))

export const Text = styled.Text((props) => ({
  color: props.theme.colors.textSecundary,
  fontFamily: props.theme.fonts.primary,
  fontSize: props.theme.fonts.size.title,
}))
