import styled from 'styled-components'

interface TextInputProps {
    multiline: boolean,
    error: string
}

export const Container = styled.View(props => ({
    
}))

export const TextInput = styled.TextInput<TextInputProps>(props => ({
    backgroundColor: props.theme.colors.background,
    paddingLeft: 10,
    color:  props.theme.colors.primary,
    fontFamily:  props.theme.fonts.primary,
    fontSize:  props.theme.fonts.size.primary,
    height: props.multiline ? 150 : 50,
    textAlignVertical: props.multiline ? 'top' : 'center',
    marginHorizontal: 5,
    marginTop: 5,
    borderWidth: props.error ? 1 : 0,
    borderColor: props.error ? props.theme.colors.buttonPrimary : null
}))


