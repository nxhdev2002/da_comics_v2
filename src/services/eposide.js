import axios from "axios"

export const fetch_eposide_list = async (uuid) => {
    let rs = await axios.get(`https://nxhdev.pro/mangadex/manga/${uuid}/chapter`)
    return rs.data
}