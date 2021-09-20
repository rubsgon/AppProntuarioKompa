import styled from 'styled-components/native'

export const Container = styled.SafeAreaView(props => ({
    flex: 1,
    backgroundColor: props.theme.colors.background,
    marginTop: 10,
    marginHorizontal: 10
}))

