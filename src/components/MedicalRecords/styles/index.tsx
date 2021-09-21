import styled from 'styled-components/native'

export const Container = styled.View((props) => ({
  flexDirection: 'row',
  flex: 1,
}))

export const ContainerMedicalRecord = styled.ScrollView((props) => ({
  marginBottom: 20,
  borderRadius: 10,
  backgroundColor: '#FFF',
  paddingBottom: 20,
  flex: 1,
}))
