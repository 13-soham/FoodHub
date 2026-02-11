let resApi = "https://fakerestaurantapi.runasp.net/api/Restaurant/items";

export const Items = async () => {
    try {
        let response = await fetch(resApi);
        let data = await response.json();
        if(!response || !data){
            throw new Error("response or data has not came through");
        }

        return data;
    } catch (err) {
        console.error(err.message);
    }
}