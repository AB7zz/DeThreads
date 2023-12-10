import type { PlasmoMessaging } from "@plasmohq/messaging"
 
const handler: PlasmoMessaging.PortHandler = async (req, res) => {

  chrome.webNavigation.onCompleted.addListener(async(details) => {
      if(details.frameType == "outermost_frame"){
          const result = await chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            func: (url) => {
                if(url.includes('youtube')){
                    return true
                }else{
                    return false
                }
            },
            args: [details.url]
        });
        const watching = result[0].result;
        res.send({
            watching: watching,
            url: details.url
        })
      }
  });
}
 
export default handler