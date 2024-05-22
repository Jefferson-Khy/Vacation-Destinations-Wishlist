export function getPhoto(destination) {
  return fetch(`https://api.unsplash.com/search/photos?query=${destination}`, {
    method: "GET",
    headers: {
      Authorization: `Client-ID UcL_oDqsa7rrfCC7Yy2Nl0_2gv4wBCr8N7ceCRczS1Y`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const firstPic = data.results[0]?.urls?.regular || null;
      return firstPic;
    });
}
