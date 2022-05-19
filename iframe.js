// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player1, player2, player3;
function onYouTubeIframeAPIReady() {
  player1 = new YT.Player('player-1', {
    width: '420',
    height: '200',
    videoId: 'jofNR_WkoCE',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      start: 28,
      end: 72,
      playsinline: 1,
      controls: 1
    },
    events: {
      //onReady: onPlayerReady
    }
  });
  player2 = new YT.Player('player-2', {
    width: '720',
    videoId: 'nuw6YBn6pnk',
    playerVars: {
      modestbranding: 1,
      playsinline: 1,
      controls: 1
    }
  });
  player3 = new YT.Player('player-3', {
    width: '720',
    videoId: '1MWoPKlAXx4',
    playerVars: {
      modestbranding: 1,
      playsinline: 1,
      controls: 1
    }
  });
}

// 4. The API will call this function when the video player is ready.
https: function onPlayerReady(event) {
  event.target.playVideo();
}
