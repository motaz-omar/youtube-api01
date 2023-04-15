fetch(
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC8butISFwT-Wl7EV0hUK0BQ&maxResults=10&order=date&key=AIzaSyC5BilnxYvPKTDdIMOhovzQpHHQlnPjVF0"
)
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    let videos = data.items;
    let videoscontainer = document.querySelector("#main");
    for (video of videos) {
      videoscontainer.innerHTML += `
      <article class="video">
      
      
      
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div class="details">
    <h1 class="title">${video.snippet.title}</h1>
      <p class="description">${video.snippet.description}</p>
      </div>
    </article>

    `;
    }
  });
