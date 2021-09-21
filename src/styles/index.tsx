import styled from 'styled-components/native'

export const Container = styled.SafeAreaView((props) => ({
  flex: 1,
  backgroundColor: props.theme.colors.background,
  paddingTop: 15,
  paddingHorizontal: 15,
}))
