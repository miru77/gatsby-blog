import React from "react"
import "./Courses.scss"
import { Image } from "semantic-ui-react"
import { map } from "lodash"
import dataCourses from "./data"

export default function Courses() {
  return (
    <div className="courses">
      {map(dataCourses, (course, index) => (
        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="courses__item"
        >
          <Image src={course.image} alt={course.title} />
        </a>
      ))}
    </div>
  )
}
