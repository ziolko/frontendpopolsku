import menu from '../menu'

export default menu.reduce((acc, item) => [...acc, item, ...(item.children || [])], [])
