import React, { FC } from 'react'
import moment from 'moment'

import {
  Container,
  Text,
  Icon,
} from './styles'

interface Props {
    item: {
        createdAt: string
    }
}

const Hour: FC<Props> = ({ item }) => (
  <Container>
    <Icon name="clock" size={24} />
    <Text>{moment(item?.createdAt).format('HH:mm')}</Text>
  </Container>
)

export default Hour
