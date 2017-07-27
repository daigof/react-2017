export const navBackColor = '#3C4147'
export const mainBackColor = '#272B30'

export const rightMargin = (marginRight = 10) => {
  return { marginRight }
}

export const getFlex = (justifyContent = 'flex-start', alignItems = 'center') => {
  return {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent,
    alignItems
  }
}

export const pointerOnHover = {
  ':hover': {
    cursor: 'pointer'
  }
}
