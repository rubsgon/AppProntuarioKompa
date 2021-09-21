import React, { FC } from 'react'
import moment from 'moment'

import {
  Container,
  TextDateDay,
  TextDateMonth,
  TextDateYear,
} from './styles'

interface Props {
    item: {
        createdAt: string
    }
}

const Date: FC<Props> = ({ item }) => (
  <Container>
    <TextDateDay>{moment(item?.createdAt).format('DD')}</TextDateDay>
    <TextDateMonth>{moment(item?.createdAt).locale('pt-br').format('MMM').toUpperCase()}</TextDateMonth>
    <TextDateYear>{moment(item?.createdAt).format('YYYY')}</TextDateYear>
  </Container>
)

export default Date
