import { useEffect } from "react";
import { UseVideoStore } from "../store/UseVideoStore";

function Videos() {
    const { getVideos, videos} = UseVideoStore();

    useEffect(()=>{
        getVideos();
    },[]);

    console.log(videos);
  return (
    <div>Videos</div>
  )
}

export default Videos