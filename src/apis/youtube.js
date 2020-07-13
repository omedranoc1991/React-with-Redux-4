import axios from 'axios'

const KEY = 'AIzaSyBbrmp78SMc0q3hHSw-HKsT4mUa0r-L_9E'

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        type : 'video',
        maxResults : 5,
        key : KEY
    }    
})