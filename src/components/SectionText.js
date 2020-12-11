import React from "react"
import ReactMarkdown from "react-markdown"
import Typography from "@material-ui/core/Typography"

const SectionText = ({ title, text }) => {
  return (
    <div style={{ marginTop: 15, maxWidth: 800, margin: '0 auto' }}>
      <Typography variant="h3" style={{ textAlign: "center" }}>
        {title}
      </Typography>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  )
}

export default SectionText
