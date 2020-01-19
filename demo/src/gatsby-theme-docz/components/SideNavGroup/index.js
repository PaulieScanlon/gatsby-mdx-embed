/** @jsx jsx */
import { jsx } from "theme-ui"
import { useRef, useState, useEffect } from "react"

import * as styles from "gatsby-theme-docz/src/components/NavGroup/styles"
import { NavLink } from "gatsby-theme-docz/src/components/NavLink"
import { ChevronDown } from "gatsby-theme-docz/src/components/Icons"

export const SideNavGroup = ({ item, sidebarRef }) => {
  const getCurrentLocation = () => {
    if (typeof window === "undefined") {
      return ""
    }
    return window.location ? decodeURI(window.location) : ""
  }

  const currentDocRef = useRef()
  const { menu } = item

  const [subheadingsVisible, setShowsubheadings] = useState(
    getCurrentLocation().includes(item.name.toLowerCase())
  )

  const toggleSubheadings = () => {
    setShowsubheadings(!subheadingsVisible)
  }

  useEffect(() => {
    if (sidebarRef.current && currentDocRef.current) {
      sidebarRef.current.scrollTo(0, currentDocRef.current.offsetTop)
    }
  }, [sidebarRef])

  return (
    <div sx={styles.wrapper} data-testid="nav-group">
      {/* eslint-disable-next-line */}
      <div sx={styles.title} onClick={toggleSubheadings}>
        {item.name}
        <ChevronDown
          sx={styles.chevron({
            active: subheadingsVisible,
          })}
        />
      </div>
      <div sx={styles.sublinkWrapper} data-testid="nav-group-links">
        {subheadingsVisible &&
          menu.map((menu, index) => {
            return (
              <div key={menu.name}>
                {menu.route ? (
                  <NavLink
                    key={`${menu.name}-${index}`}
                    item={menu}
                    ref={currentDocRef}
                  >
                    {menu.name}
                  </NavLink>
                ) : null}

                {Array.isArray(menu.menu) ? (
                  <SideNavGroup
                    item={{
                      name: menu.name,
                      menu: menu.menu,
                    }}
                    sidebarRef={sidebarRef}
                  />
                ) : null}
              </div>
            )
          })}
      </div>
    </div>
  )
}
