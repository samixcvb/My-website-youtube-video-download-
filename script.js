// Function to handle video download (for demonstration purposes)
function downloadVideo() {
    const videoURL = document.getElementById('video-url').value;
    
    if (!videoURL) {
        alert("Please enter a valid YouTube video URL.");
        return;
    }
    
    // Check if the URL is valid
    if (isValidYouTubeURL(videoURL)) {
        alert("Video download started... (This is a demo, functionality needs server-side implementation)");
    } else {
        alert("Invalid YouTube URL. Please try again.");
    }
}

// Function to check if the YouTube URL is valid (basic check)
function isValidYouTubeURL(url) {
    const regex = /^(https?:\/\/)?(www\.)?(youtube|youtu|youtube-nocookie)\.(com|be)\/(watch\?v=|embed\/)([a-zA-Z0-9_-]{11})/;
    return regex.test(url);
}

// Function for Premium Upgrade (dummy function)
function goPremium() {
    alert("You have upgraded to Premium. Enjoy an ad-free experience!");
}
