import styled from 'styled-components/native'

export const Container = styled.ScrollView((props) => ({
}))

export const TitleNoMedicalRecords = styled.Text((props) => ({
  color: props.theme.colors.textPrimary,
  fontFamily: props.theme.fonts.primary,
  fontSize: props.theme.fonts.size.title,
}))

export const AddMedicalRecordsButton = styled.TouchableOpacity((props) => ({
  marginTop: 5,
  marginBottom: 20,
}))
