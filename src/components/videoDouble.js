import React from 'react';

const VideoDouble = (props) => {
  let video_id = props.vidData.video1.url.split('v=')[1];
  let video_id2 = props.vidData.video2.url.split('v=')[1];
  let ampersandPosition = video_id.indexOf('&');
  if(ampersandPosition != -1) {
    video_id = video_id.substring(0, ampersandPosition);
  }
  let ampersandPosition2 = video_id2.indexOf('&');
  if(ampersandPosition2 != -1) {
    video_id2 = video_id2.substring(0, ampersandPosition2);
  }
  let vid_img = "url('https://img.youtube.com/vi/" + video_id + "/0.jpg'";
  let vid_img2 = "url('https://img.youtube.com/vi/" + video_id2 + "/0.jpg'";
return (
    <li className="image-double-wrapper fade-in show animate">
    {console.log(props.vidData[Object.keys(props.vidData)[0]])}
      <a
      className="image-double"
      href={props.vidData.video1.url}
      style={{ backgroundImage: vid_img }}
      target="_blank">
        <div class="image-hover">
          <div class="text">
            <div class="title">{props.vidData.video1.title}</div>
            <div class="subtitle">{props.vidData.video1.subtitle}</div>
          </div>
        </div>
      </a>
      <a
      className="image-double"
      href={props.vidData.video2.url}
      style={{ backgroundImage: vid_img2 }}
      target="_blank">
        <div class="image-hover">
          <div class="text">
            <div class="title">{props.vidData.video2.title}</div>
            <div class="subtitle">{props.vidData.video2.subtitle}</div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default VideoDouble;
