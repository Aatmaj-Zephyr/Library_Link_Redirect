window.addEventListener('DOMContentLoaded', async () => {
    const currentUrl = chrome.tabs
      .query({ active: true, currentWindow: true })
      .then((tabs) => tabs[0].url);

    //if ieee
    const newUrl = await currentUrl.then((url) => redirectURL(url));

    chrome.tabs.update({ url: newUrl });
    window.close(); // Close the popup immediately
});

function redirectURL(url) {
  if (url.includes("ieeexplore")) {
        url = url.replace(
          "https://ieeexplore.ieee.org/",
          "https://ieeexplore-ieee-org.library.somaiya.edu/",
        );
      } else if (url.includes("dl.acm")) {
        url = url.replace(
          "https://dl.acm.org/",
          "https://dl-acm-org.library.somaiya.edu/",
        );
      }
      return url; // Return the modified URL
 
}
