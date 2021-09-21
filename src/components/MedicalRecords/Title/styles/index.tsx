import styled from 'styled-components/native'

export const Container = styled.View((props) => ({
  backgroundColor: props.theme.colors.lightgreen,
  paddingLeft: 10,
  height: 40,
  justifyContent: 'center',
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
}))

export const Text = styled.Text((props) => ({
  color: props.theme.colors.blackgreen,
  fontFamily: props.theme.fonts.primary,
  fontSize: props.theme.fonts.size.primary,
}))
