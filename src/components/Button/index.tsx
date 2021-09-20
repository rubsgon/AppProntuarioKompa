import React, { FC } from 'react'

import { Container, Text } from './styles'

interface Props {
    onPress: Function,
    text: string,
    asButton?: React.Component,
}

const Button: FC<Props> = ({ onPress, text, asButton }) => (
  <Container as={asButton} onPress={onPress}>
    <Text>{text}</Text>
  </Container>
)

export default Button
