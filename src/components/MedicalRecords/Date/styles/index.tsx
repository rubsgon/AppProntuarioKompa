import styled from 'styled-components/native'

export const Container = styled.View((props) => ({
  marginRight: 15,
  marginTop: 10,
  alignItems: 'center',
}))

export const TextDateDay = styled.Text((props) => ({
  fontSize: 22,
  color: props.theme.colors.blackgreen,
  fontWeight: 'bold',
}))

export const TextDateMonth = styled(TextDateDay)((props) => ({
  fontSize: 18,
}))

export const TextDateYear = styled(TextDateDay)((props) => ({
  fontSize: 14,
}))
