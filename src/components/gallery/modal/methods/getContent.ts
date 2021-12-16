import axios from "axios"
import { ImodalContent } from '../../../../types'


export const getContent = async (setContent: (value: ImodalContent) => void, setIsLoading: (value: boolean) => void, id?: number) => {
    try {
        const { data } = await axios.get<ImodalContent>(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
        setContent(data)
        setIsLoading(true)
    } catch (error) {
        console.log(error)
    }
}