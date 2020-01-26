/** @jsx jsx */
import { useState } from "react"
import { jsx } from "theme-ui"
import { useDbQuery } from "gatsby-theme-docz/src/hooks/useDbQuery"

import { ChevronDown, ChevronUp } from "gatsby-theme-docz/src/components/Icons"
import * as styles from "gatsby-theme-docz/src/components/Props/styles"

export const getDefaultValue = ({ defaultValue, type, flowType }) => {
  const propType = flowType ? flowType : type
  if (!defaultValue || !defaultValue.value) return null
  if (defaultValue.value === "''") {
    return "[Empty string]"
  }
  if (propType && propType.name === "string") {
    return defaultValue.value.replace(/\'/g, '"')
  }
  if (typeof defaultValue.value === "object" && defaultValue.value.toString) {
    return defaultValue.value.toString()
  }
  return defaultValue.value
}

export const Prop = ({ propName, prop, getPropType, isToggle }) => {
  const [showing, setShowing] = useState(isToggle || false)
  if (!prop.type && !prop.flowType) return null

  const toggle = () => setShowing(s => !s)
  return (
    <div sx={styles.line} data-testid="prop">
      <div sx={styles.content}>
        <div sx={styles.propName} data-testid="prop-name">
          {propName}
        </div>
        <div sx={styles.propType} data-testid="prop-type">
          {getPropType(prop)}
        </div>
        {prop.defaultValue && (
          <div sx={styles.defaultValue} data-testid="prop-default-value">
            <em>{getDefaultValue(prop)}</em>
          </div>
        )}
        <div sx={styles.right}>
          {prop.required && (
            <div sx={styles.propRequired} data-testid="prop-required">
              <strong>required</strong>
            </div>
          )}
          {prop.description && (
            <button
              sx={styles.openDescBtn}
              onClick={toggle}
              data-testid="prop-toggle-description"
            >
              {showing ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          )}
        </div>
      </div>
      {showing && prop.description && (
        <div sx={styles.description} data-testid="prop-description">
          {prop.description}
        </div>
      )}
    </div>
  )
}

export const Props = ({ name, props, getPropType, isToggle }) => {
  const db = useDbQuery()
  // const entries = Object.entries(props)
  const _entries = Object.entries(
    db.props.filter(
      prop => prop.value.length > 0 && prop.value[0].displayName === name
    )[0].value[0].props
  )

  return (
    <div sx={styles.container} data-testid="props">
      {_entries.map(([key, prop]) => {
        return (
          <Prop
            key={key}
            propName={key}
            prop={prop}
            getPropType={getPropType}
            isToggle={isToggle}
          />
        )
      })}
      {/* {entries.map(([key, prop]) => {
        return (
          <Prop
            key={key}
            propName={key}
            prop={prop}
            getPropType={getPropType}
            isToggle={isToggle}
          />
        )
      })} */}
    </div>
  )
}
