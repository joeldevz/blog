import {useState} from 'react'
const Share =()=>{
    const [twitter, setTwitter] = useState(false)
    const [facebook, setFacebook] = useState(false)

    return (
        <>
<div class="container">
  <div class="button">Share</div>
  <div class="social twitter"><a href="https://twitter.com/sa_sha26" target="_blank"><i class="fa fa-twitter"></i></a></div>
  <div class="social facebook"><i class="fa fa-facebook"></i></div>
  <div class=" social google"><i class="fa fa-google-plus"></i></div>
  <div class="social youtube"><a href="https://www.youtube.com/channel/UCCATAa8MWoBuH-sR_Jlx29A" target="_blank"><i class="fa fa-youtube"></i></a></div>
</div>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
      <feBlend in="SourceGraphic" in2="goo" />
  	</filter>
  </defs>
</svg>
</>

    )
}
export default Share