import {useState, useEffect} from 'react'
import {Box, Typography} from '@mui/material'
import {Videos} from "./"
import { fetchFromAPI } from '../utils/fectchFromAPI'
import  { useParams } from 'react-router-dom'




const SearchFeed = () => {
    // const [selectedCategory, 
    // setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([])
    const { searchTerm } = useParams()

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=$
        {searchTerm}`)
        .then((data) => setVideos(data.items))
    },[searchTerm])

  return (
    //  <Stack sx={{flexDirection: {sx: "column", md:"row"}}}>
        // <Box sx={{height: {sx: 'auto', md:'92vh'}, borderRight: '1px solid #3d3d3d', 
        // px: {sx: 0, md: 2}}}>
        //     <Sidebar 
        //         selectedCategory=
        //         {selectedCategory}
        //         setSelectedCategory=
        //         {setSelectedCategory}
        //     />
        //     <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff'}}>Created By 🌞 Gaonkar</Typography>
        // </Box>
        <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
            <Typography variant="h4"
            fontWeight="bold" mb = {2} sx={{
                color:'white'
            }}>
                Search Reasults For:  <span style={{color: '#F31503'}}>
                {searchTerm }
                </span> Videos
            </Typography>
            <Videos videos={videos}/>
        </Box>
    //  </Stack>
  )
}

export default SearchFeed

// import React from 'react'

// const SearchFeed = () => {
//   return (
//     <div>SearchFeed</div>
//   )
// }

// export default SearchFeed