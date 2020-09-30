import React from "react"
import { Link } from "gatsby"
import "./Menu.scss"
import SocialMedia from "../SocialMedia"
import Courses from "../Courses"

export default function Menu() {
  return (
    <div className="menu">
      <Link to="/">
        <h2>Blog Debeloper</h2>
      </Link>
      <p>
        Blog sobre desarrollo web, programación JavaScript, React, React Native,
        Node, Next, Gastby ....
      </p>
      <SocialMedia />
      <Courses />
    </div>
  )
}
