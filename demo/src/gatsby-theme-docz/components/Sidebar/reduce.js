export const reduce = array => {
  const result = []
  // object to keep grouped submenus
  let grouped = {}

  for (let i of array) {
    if (Array.isArray(i.menu)) {
      // if the current item has a nested submenu we call reduce recursively
      result.push({
        name: i.name,
        hasParent: false,
        menu: reduce(i.menu),
      })
    } else if (i.submenu) {
      // if it has a submenu we put it to the grouped object
      if (grouped[i.submenu]) {
        grouped[i.submenu].menu.push(i)
      } else {
        result.push(
          (grouped[i.submenu] = {
            name: i.submenu,
            hasParent: true,
            menu: [i],
          })
        )
      }
    } else {
      // else we just copy it to the result array
      result.push(i)
    }
  }

  return result
}
