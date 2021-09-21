import React, { FC } from 'react'
import moment from 'moment'

import {
  Container,
  Text,
} from './styles'

interface Props {
    item: {
        createdAt: string
    }
}

const Hour: FC<Props> = ({ item }) => (
  <Container>
    <Text>{moment(item?.createdAt).format('HH:mm')}</Text>
  </Container>
)

export default Hour
