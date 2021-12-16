import { IModalFormData, ImodalRes } from '../../../../types'
import axios from 'axios';

export const onSumbit = async (data: IModalFormData, id?: number): Promise<boolean> => {
    try {
        const { status } = await axios.post<ImodalRes>(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, JSON.stringify({
            name: data.name,
            comment: data.text
        }), {
            headers: {
                'Content-type': 'application/json',
            }
        })
        console.log(status)
        return status === 204 ? true : false
    } catch (error) {
        console.log(error)
        return false
    }
}