import Main from "~main"
import { MyStateProvider } from "~context/StateContext"

function IndexPopup() {

  return (
    <>
      <MyStateProvider>
        <Main />
      </MyStateProvider>
    </>
  )
}

export default IndexPopup
