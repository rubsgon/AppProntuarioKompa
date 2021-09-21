import styled from 'styled-components/native'

interface TextProps {
  title?: boolean
}

export const Text = styled.Text<TextProps>(({ title = false, theme }) => ({
  fontFamily: theme.fonts.primary,
  fontSize: theme.fonts.size.primary,
  color: theme.colors.textPrimary,
  fontWeight: title ? 'bold' : 'normal',
}))
