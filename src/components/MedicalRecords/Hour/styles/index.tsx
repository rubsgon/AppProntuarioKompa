import styled from 'styled-components/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export const Container = styled.View((props) => ({
  backgroundColor: props.theme.colors.blackgreen,
  height: 50,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  alignItems: 'center',
  paddingLeft: 10,
  flexDirection: 'row',
}))

export const Text = styled.Text((props) => ({
  color: props.theme.colors.textSecundary,
  fontFamily: props.theme.fonts.primary,
  fontSize: props.theme.fonts.size.title,
}))

export const Icon = styled(FontAwesome5)((props) => ({
  color: '#FFF',
  marginRight: 5,
}))
