import React from "react"
import "./Pagination.scss"
import PropType from "prop-types"
import { Link } from "gatsby"

export default function Pagination(props) {
  const { pageContext } = props
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <div className="pagination">
      {previousPagePath && <Link to={previousPagePath}>Atras</Link>}
      {nextPagePath && <Link to={nextPagePath}>Siguiente</Link>}
    </div>
  )
}
