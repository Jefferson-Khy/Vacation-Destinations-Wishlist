photo =
  fetch(`https://api.unsplash.com/search/photos?query=${destination}`, {
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
      // console.log(response.json());
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
      const firstPic = data.results[0].urls.regular;
      console.log(firstPic);
      return firstPic;
    }) ||
  "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";

async function getPhoto() {
  const result = await fetch(
    `https://api.unsplash.com/search/photos?query=${destination}`,
    {
      method: "GET",
      headers: {
        Authorization: `Client-ID UcL_oDqsa7rrfCC7Yy2Nl0_2gv4wBCr8N7ceCRczS1Y`,
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // console.log(response.json());
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
      const firstPic = data.results[0].urls.regular;
      console.log(firstPic);
      return firstPic;
    });
  return result;
}
