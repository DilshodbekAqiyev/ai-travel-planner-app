import { HotelDetailsProps } from "@/configs/props/interface";
import { createContext, Dispatch, SetStateAction } from "react";


interface HotelDetailsContextProps {
    hotelList: HotelDetailsProps[] | null,
    setHotelList: Dispatch<SetStateAction<HotelDetailsProps[] | null>>,
    currentHotel: HotelDetailsProps | null,
    setCurrentHotel: Dispatch<SetStateAction<HotelDetailsProps | null>>,
}

export const HotelDetailsContext = createContext({});