
//api request// 

const api_key = "AIzaSyCKHqWr0KCRmrFUWOrG3gG66p_ODIERJQE"; 
const playlist_id = "PLZ-jB_jAvtmesbwrRjClvF6jJsI6-Fr8Z";  
const api_url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlist_id}&key=${api_key}`;


fetch(api_url)
.then(response => response.json())
.then(data => { console.log(data); 
    const play_list_items = data.items;
    play_list_items.forEach(item => {
        const video_title = item.snippet.title; 
        const video_id = item.snippet.resourceId.videoId; 
        console.log('Video title: ${video_title}, Video ID: ${video_id}')
    }); 
})

.catch(error => console.error("error")); 