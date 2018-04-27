import {StyleSheet} from 'react-native'
import {FONT_SIZE} from '../utils'

export default styles = StyleSheet.create({
    TouchableStyle: {
        borderWidth: 1,
        borderColor: '#01a699',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        aspectRatio: 1,
        backgroundColor: '#fff',
        borderRadius: 150
    },
    ContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    ScrollViewStyle: {
        flex: 1,
        marginLeft:40,
        marginRight:40
    },
    ContentStyle: {
        textAlign: "center",
        fontSize: FONT_SIZE,

    },
    SpacingViewStyle:{
        height:30
    },
    List: {
        padding: 3,
        margin: 3,
        backgroundColor: '#F6F7F9'
    },
    Row: {
        flex: 1,
        marginBottom: 5,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        borderColor: '#D8D8D8',
        borderBottomWidth: 2
    },
    Image: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: "50",
        aspectRatio: 1,
        borderRadius: 100,
    }
});