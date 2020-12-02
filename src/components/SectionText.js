import React from "react"
import ReactMarkdown from "react-markdown"
import Typography from "@material-ui/core/Typography"
const SectionText = ({ title, text }) => {
  return (
    <div style={{ padding: 30 }}>
      <Typography variant="h3" style={{ textAlign: "center" }}>
        {title}
      </Typography>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  )
}

export default SectionText