import React from "react"
import Footer from "../components/footer"

const plugins = ['gatsby-plugin-typography']
const packages = [
  'typography',
  'react-typography',
  'typography-theme-wordpress-kubrick', 
]

export default () => (
  <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <h1>Richard Hamming on Luck</h1>
    <div>
      <p>
        From Richard Hamming’s classic and must-read talk, “
        <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
          You and Your Research
        </a>
        ”.
      </p>
      <blockquote>
        <p>
          There is indeed an element of luck, and no, there isn’t. The prepared
          mind sooner or later finds something important and does it. So yes, it
          is luck.{" "}
          <em>
            The particular thing you do is luck, but that you do something is
            not.
          </em>
        </p>
      </blockquote>
    </div>
    <p>Posted April 09, 2011</p>

    <Footer 
      title='Typography'
      plugins={plugins}
      packages={packages}
      description={`Typography.js is a JavaScript 
      library that enables you to define and explore the typographic 
      design of your website and define beautiful custom and pre-existing 
      typographic themes. It limits the number of tedious changes you need 
      to make to your website just to change the font. Typography.js 
      currently maintains over 30 themes for you to use, however you 
      can also define your own custom font themes if none of the available 
      themes meet your requirements. Implementing Typography into your project 
      involves specifying a configuration object for Typography and 
      installing a Gatsby plugin.`} />
  </div>
)