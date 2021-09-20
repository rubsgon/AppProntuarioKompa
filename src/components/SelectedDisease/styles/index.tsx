import styled from 'styled-components/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export const Container = styled.View(props => ({

}))

export const ContainerDisease = styled.View(props => ({
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: props.theme.colors.lightgreen,
    width: 100,
    height: 30,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    flexDirection: 'row',
}))

export const TextDisease = styled.Text(props => ({
    color: props.theme.colors.primary,
    fontFamily: props.theme.fonts.primary,
    fontSize: props.theme.fonts.size.primary,
}))

export const ButtonCloseDisease = styled.TouchableOpacity(props => ({
    marginLeft: 10,
    marginTop: 3
}))

export const IconCloseDisease = styled(FontAwesome5)(props => ({
   
}))
