import React, { FC } from 'react'

import { Container, Text } from './styles'

type ButtonProps = {
    text: string,
    asButton?: React.Component
}

const Button: FC<ButtonProps> = ({ text, asButton }) => (
  <Container as={asButton}>
    <Text>{text}</Text>
  </Container>
)

export default Button
