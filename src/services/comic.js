import axios from "axios"

export const fetch_list_comic = async () => {
    let rs = await axios.get("https://nxhdev.pro/mangadex/manga?includes[]=cover_art")
    return rs.data
}

export const fetch_popular_list = async (offset) => {
    console.log(offset)
    let data = await axios.get("https://nxhdev.pro/mangadex/manga?publicationDemographic%5B%5D=shounen&contentRating%5B%5D=erotica&order%5BlatestUploadedChapter%5D=desc&includes%5B%5D=cover_art&offset=" + offset.toString())
    return data.data
}