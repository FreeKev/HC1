import React from 'react';

const Video = (props) => {
  let video_id = props.vidData.video1.url.split('v=')[1];
  let ampersandPosition = video_id.indexOf('&');
  if(ampersandPosition != -1) {
    video_id = video_id.substring(0, ampersandPosition);
  }
  let vid_img = "url('https://img.youtube.com/vi/" + video_id + "/0.jpg'";

return (
    <li className="image-single-wrapper">
      <a
      className="image-single"
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
    </li>
  );
};

export default Video;
