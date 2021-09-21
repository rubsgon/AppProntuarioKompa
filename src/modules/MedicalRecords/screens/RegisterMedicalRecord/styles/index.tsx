import styled from 'styled-components/native'

export const Container = styled.ScrollView((props) => ({
  backgroundColor: '#FFF',
}))

export const ContainerPatientInformation = styled.View((props) => ({
  marginTop: 10,
  paddingLeft: 10,
}))

export const AddMedicalRecordButton = styled.TouchableOpacity((props) => ({
  marginTop: 20,
  marginHorizontal: 10,
}))
