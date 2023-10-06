import { createTheme } from '@rneui/themed';

// const isSolid = (props) => props.type === 'solid' || props.type === undefined;

export const theme = createTheme({
  mode: 'light',
  lightColors: {
    yellowDark: '#eec100',
    yellowLight: '#fbe300',
    blueDark: '#00004d',
    blueLight: '#0c0068',
  },
  components: {
    CheckView: (props, theme) => ({
      containerStyle: {
        backgroundColor: 'transparent',
        padding: 0,
        // margin: 0,
      },
      checkedColor: theme.colors.yellowDark,
    }),
    Input: (props, theme) => ({
      inputContainerStyle: {
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderColor: '#737373',
        marginHorizontal: 0,
      },
      inputStyle: {
        fontSize: 12,
      },
    }),
    Button: (props, theme) => ({
      // color: isSolid(props) ? theme.colors.yellowDark : '',
      titleStyle: {
        // color: isSolid(props) ? '#fff' : theme.colors.yellowDark,
      },
      buttonStyle: {
        borderRadius: 8,
        borderColor: theme.colors.yellowDark,
        borderWidth: 2,
      },

      disabledStyle: {
        backgroundColor: '#F5F5F5',
        borderColor: 'transparent',
      },
      disabledTitleStyle: {
        fontWeight: '700',
        color: '#A3A3A3',
        fontSize: 18,
      },
    }),
  },
});
