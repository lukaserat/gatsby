import React from "react"
import Footer from "../components/footer"
import Confetti from '../components/confetti'

const style = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  zIndex: -1,
  left: 0,
  top: 0,
};

export default () => (
  <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <Confetti style={style} />
    <Footer 
      title='Confetti'
      />
  </div>
)