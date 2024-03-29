/* The code snippet you provided is using JavaScript to listen for the 'DOMContentLoaded' event on the
window object. When this event is triggered (indicating that the initial HTML document has been
completely loaded and parsed), an asynchronous function is executed. */
window.addEventListener('DOMContentLoaded', async () => {
    const currentUrl = chrome.tabs
      .query({ active: true, currentWindow: true })
      .then((tabs) => tabs[0].url);

    const newUrl = await currentUrl.then((url) => redirectURL(url));

    chrome.tabs.update({ url: newUrl });
    window.close(); // Close the popup immediately after the URL has been changed.
});

function redirectURL(url) {
  if (url.includes("ieeexplore")) {
        url = url.replace(
          "https://ieeexplore.ieee.org/",
          "https://ieeexplore-ieee-org.library.somaiya.edu/",
        );
  } else if (url.includes("dl.acm.org")) {
        url = url.replace(
          "https://dl.acm.org/",
          "https://dl-acm-org.library.somaiya.edu/",
        );
  }
  else if (url.includes("link.springer.com")) {
        url = url.replace(
          "https://link.springer.com/",
          "https://link-springer-com.library.somaiya.edu/",
        );
  }
  else if (url.includes("sciencedirect.com")) {
        url = url.replace(
          "https://www.sciencedirect.com/",
          "https://www-sciencedirect-com.library.somaiya.edu/",
        );
  }
  
  return url; // Return the modified URL
 
}
