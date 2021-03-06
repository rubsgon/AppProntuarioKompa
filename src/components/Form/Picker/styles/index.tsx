import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export const Container = styled.View((props) => ({

}))

export const Icon = styled(FontAwesome5)((props) => ({
  top: 25,
  right: 20,
}))

export const pickerStyle = (error: string) => {
  const themeContext = useContext(ThemeContext)

  return {
    inputAndroid: {
      backgroundColor: themeContext.colors.background,
      borderRadius: 5,
      marginTop: 5,
      marginHorizontal: 5,
      height: 50,
      paddingLeft: 10,
      borderWidth: error ? 1 : 0,
      borderColor: error ? themeContext.colors.buttonPrimary : null,
    },
    placeholder: {
      color: themeContext.colors.grey,
      fontFamily: themeContext.fonts.primary,
      fontSize: themeContext.fonts.size.primary,
    },
  }
}
