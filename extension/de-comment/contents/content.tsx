import { usePort } from "@plasmohq/messaging/hook"
import type { PlasmoCSConfig } from "plasmo"
import React from 'react'
import logo from 'data-base64:~assets/icon.development.png'
import CloseIcon from '@mui/icons-material/Close';

export const config: PlasmoCSConfig = {
  matches: [
    "https://www.youtube.com/*"
  ],
  all_frames: true
}
 
function Content() {
  const htmlPort = usePort("html")
  const [display, setDisplay] = React.useState(false)
  const [url, setURL] = React.useState('')
  const [commentBox, setCommentBox] = React.useState(true)
  React.useEffect(() => {
    htmlPort.send({
      message: "run_get_html_data"
    })
  }, [])

 React.useEffect(() => {
  if (htmlPort.data?.watching) {
    console.log(htmlPort.data?.watching)
    setURL(htmlPort.data?.url)
    setDisplay(true)
  }else{
    console.log(htmlPort.data?.watching)
    setDisplay(false)
  } 
 }, [htmlPort.data])

  return (
    <>
      <div>
        {htmlPort.data?.watching && display &&
          <div
          style={{
            backgroundColor: "#F2F2F2",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
            position: "fixed",
            left: "70%",
            top: 0,
            width: "350px",
            borderRadius: "10px"
          }}
          >
            <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            >
              <h3
              onClick={() => setCommentBox(true)}
              style={{
                color: "black",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "bold",
                fontSize: "1.5rem",
                marginRight: "10px",
                cursor: 'pointer'
              }}
              >Click here to open comment box!</h3>
              <CloseIcon onClick={() => setDisplay(false)} style={{
                width: "50px", 
                cursor: "pointer"
              }} />
            </div>
          </div>  
        }
      </div>
      {commentBox &&
      <div
      style={{
        position: "fixed",
        left: "70%",
        top: 0,
        width: "370px",
        height: "500px",
        borderRadius: "10px"
      }}
      >
        <iframe height="100%" src={`http://localhost:5173?url=${url}`} />
      </div>}
    </>
  )
}
 
export default Content