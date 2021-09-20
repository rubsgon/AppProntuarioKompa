import React, { FC } from 'react'
import { FlatList } from 'react-native'

import {
  Container,
  ContainerDisease,
  TextDisease,
  IconCloseDisease,
  ButtonCloseDisease,
} from './styles'

interface Props {
    data: object[],
    onClose: Function
}

const SelectedDisease: FC<Props> = ({ data, onClose }) => (
  <Container>
    <FlatList
      contentContainerStyle={{ flexDirection: 'row', alignItems: 'center' }}
      keyExtractor={(item) => item.value}
      data={data}
      renderItem={({ item }) => (
        <ContainerDisease>
          <TextDisease>{item.label}</TextDisease>
          {
              onClose && (
              <ButtonCloseDisease onPress={() => onClose(item)}>
                <IconCloseDisease name="times" size={16} />
              </ButtonCloseDisease>
              )
          }
        </ContainerDisease>
      )}
    />
  </Container>
)

export default SelectedDisease
