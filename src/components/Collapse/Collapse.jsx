import PropTypes from 'prop-types'
import { useState } from 'react'
import styles from './Collapse.module.css'

export default function Collapse({ collapsedProp = false, children }) {
  const [collapsed, setCollapsed] = useState(collapsedProp)

  return (
    <div className={styles.collapse}>
      <button
        className={styles.button}
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? 'Показать' : 'Скрыть'}
      </button>
      <div className={`${styles.content}  ${collapsed ? styles.collapsed : ''}`}>{children}</div>
    </div>
  )
}

Collapse.propTypes = {
  collapsedProp: PropTypes.bool,
  children: PropTypes.node.isRequired,
}
