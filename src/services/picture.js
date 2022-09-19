import axios from "axios"

export const fetch_picture_list = async (uuid, eposide) => {
    let rs = await axios.get(`https://nxhdev.pro/mangadex/manga/${uuid}/chapter/${eposide}`)
    return rs.data
}