import React from "react"
import { Link } from "gatsby"

export default () => (
  <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <h1>Demo</h1>
    <ul>
      <li>
        <Link to="/typography">Typhography</Link>
      </li>
      <li>
        <Link to="/confetti">Confetti</Link>
      </li>
    </ul>
  </div>
)