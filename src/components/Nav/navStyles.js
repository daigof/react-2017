import * as gStyles from '../../styleUtils'
export const navStyles = {
  topNavBar: Object.assign({}, gStyles.getFlex(), {
    height: 80,
    paddingLeft: 40,
    paddingRight: 40,
    borderBottom: 'solid 2px #ced0da',
    background: gStyles.navBackColor
  }),
  linkItem: {
    color: '#fff',
    fontSize: 20,
    paddingBottom: 10,
    textDecoration: 'none',
    ':hover': {
      cursor: 'pointer'
    }
  },
  linkItemActive: {
    boxShadow: 'inset 0 -1px 0 0 #ced0da'
  }
}
