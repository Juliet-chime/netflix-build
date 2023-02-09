import HoverVideoPlayer from 'react-hover-video-player';
import video from '../assest/video/mov_bbb.mp4'
import dancegirl from '../assest/video/dancegirls.mp4'

import womanKing from '../assest/video/womanKing.mp4'


function VideoTest() {
  return (

    <div>
        <video width="400" controls autoplay muted>
  <source src={video} type="video/mp4"/>
  Your browser does not support HTML video.
</video>

 <div style={{border:'solid red',marginTop:'20%'}}>
     <HoverVideoPlayer
      videoSrc={womanKing}
      pausedOverlay={
        // <div style={{width:'100px',height:'200px',background:'blue'}}>hello</div>
        <img
          src="https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
          alt=""
          style={{
            // Make the image expand to cover the video's dimensions
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
      muted={false}
      volume={0.5}
      controls
      style={{
        width: '20%',
        height:'10%'
      }}
    />
 </div>
        {/* <div>
            
        <video
  poster="https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
  onMouseOver={event => event.target.play()}
  onMouseOut={event => event.target.pause()}
  src={`${dancegirl}`}
  style={{
           // Make the image expand to cover the video's dimensions
         width: '100px',
        height: '100px',
        objectFit: 'cover',
              }}
  >
</video>
        </div> */}
    </div>

  );
}

export default VideoTest