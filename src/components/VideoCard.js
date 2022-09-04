import React from 'react'

import {Link} from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  return (
    <Card sx = {{width: {lg: '350px', md: '220px', xs: '100%'},
    boxShadow: 'none', borderRadius: '10px'}}>
      <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} 
          alt={snippet?.title}
          sx={{width: 358, height: 180}}
        />
      </Link>
      {/* #e3f2fd';
    100: '#bbdefb';
    200: '#90caf9';
    300: '#64b5f6'; */}
      <CardContent sx={{backgroundColor: '#bbdefb', height: '106px' }}>
        <Link to = {videoId ? `/video/${videoId}`: demoVideoUrl}>
        <Typography variant='subtitle1' fontWeight='bold'>
           {snippet?.title.slice(0, 60) + '...' || demoVideoTitle.slice(0, 60 + '...')} 
        </Typography>
        </Link>
        <Link to = {snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl}>
        <Typography variant='subtitle2' fontWeight='bold' color='gray'>
           {snippet?.channelTitle || demoChannelTitle} 
        <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}} />
        </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard