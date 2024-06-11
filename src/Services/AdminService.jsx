import axios from "./AxiosCustomize";

const WatingList = () => {
    try {
        const response = axios.get('admin/view-list-user-waiting-to-accept?pageSize=6&page=1')
        return response
    } catch (error) {
        console.log(error);
    }
}
const Accept = (id) => {
    try {
        const response = axios.post(`admin/accept-upgrade-account?user_id=${id}`)
        return response
    } catch (error) {
        console.log(error);
    }
}
const Reject = (id) => {
    try {
        const response = axios.post(`admin/reject-upgrade-account?user_id=${id}`)
        return response
    } catch (error) {
        console.log(error);
    }
}
const RejectList = () => {
    try {
        const response = axios.get('admin/view-list-reject-upgrade-to-restaurant?pageSize=10&page=1')
        return response
    } catch (error) {
        console.log(error);
    }
}
const OutReject = (id) => {
    try {
        const response = axios.delete(`admin/delete-reject-account?user_id=${id}`)
        return response
    } catch (error) {
        console.log(error);
    }
}


export { WatingList, Accept, RejectList, Reject, OutReject }