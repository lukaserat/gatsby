import React, {Component} from 'react'

import styles from "./confetti.module.scss"

class Confetti extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // viewbox and viewport should be the same
      vbH: 100,
      vbW: 100
    }
  }
  render() {
    const { style } = this.props
    const { vbH, vbW } = this.state
    return (
      <div className={styles.wrapper} style={style}>
        <svg className={styles.svg}
          viewBox={`0px 0px ${vbW * 100} ${vbH * 100}`}
          height={`${vbH}px`}
          width={`${vbW}px`}>
          <circle id="circle" cx="130" cy="40" r="50" />
        </svg>
      </div>
    )
  }
}

export default Confetti;