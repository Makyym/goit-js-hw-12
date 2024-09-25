export function searchFetch(searchValue) {
    const paramsObj = {
        key: "46092367-b3ded390d3bc77cfd15f53989",
        q: searchValue,
        image_type: "photo",
        safesearch: true,
        orientation: "horizontal",
    };
    const searchParams = new URLSearchParams(paramsObj);
    return fetch(`https://pixabay.com/api/?${searchParams}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
};