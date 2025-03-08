import { GetPhotoRef } from "@/services/GooglePlaceAPI";
import { SearchHotelDetailsProps } from "./props";


export const SearchItems = async (text: string) => {
    const results = await GetPhotoRef(text);
    const hotels: SearchHotelDetailsProps[] = results?.results;
    return hotels;
}