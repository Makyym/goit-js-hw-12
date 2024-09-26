import axios from "axios";

export async function searchFetch(searchValue, page) {
    const params = new URLSearchParams({
        key: "46092367-b3ded390d3bc77cfd15f53989",
        q: searchValue,
        image_type: "photo",
        safesearch: true,
        orientation: "horizontal",
        page: page,
        per_page: 15,
    });
    try {
        const response = await axios.get(`https://pixabay.com/api/?${params}`);
        console.log(response.data);
        return response.data;
    }
    catch(error) {
		console.log(error);
    }
};