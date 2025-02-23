// content.js

// Function to extract follower usernames
function extractFollowers() {
    const followersContainer = document.querySelector("div._aano");  // Follower list container
    if (!followersContainer) {
      console.log("Followers list not found.");
      return [];
    }
  
    const followers = [];
    const followerElements = followersContainer.querySelectorAll("span a");  // Extracting follower usernames
    
    followerElements.forEach(el => {
      followers.push(el.textContent);
    });
  
    console.log("Extracted Followers:", followers);
    return followers;
  }
  
  // Function to scroll through the followers list and extract data
  function scrollFollowersList(callback) {
    const container = document.querySelector("div._aano");  // Follower list container
    if (!container) {
      console.log("Followers container not found.");
      return;
    }
  
    let lastScrollHeight = 0;
    const observer = new MutationObserver(() => {
      const newHeight = container.scrollHeight;
      if (newHeight !== lastScrollHeight) {
        console.log("New followers loaded, scrolling further...");
        container.scrollTop = newHeight;
        lastScrollHeight = newHeight;
      }
    });
  
    observer.observe(container, { childList: true, subtree: true });
    container.scrollTop = container.scrollHeight;  // Initial scroll to load more followers
    
    setTimeout(() => {
      observer.disconnect();  // Stop observing after a fixed time
      console.log("Scrolling completed.");
      const followers = extractFollowers();  // Collect and return followers
      callback(followers);  // Send followers to the background script or popup
    }, 10000); // Scroll for 10 seconds, then stop
  }
  
  // Start extraction when called from background.js
  scrollFollowersList(followers => {
    // Send extracted data to the background for processing or exporting
    chrome.runtime.sendMessage({ action: "saveFollowers", followers: followers });
  });
  