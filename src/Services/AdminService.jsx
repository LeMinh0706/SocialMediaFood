import axios from "./AxiosCustomize";

const WatingList = async () => {
    try {
        const response = await axios.get('admin/view-list-user-waiting-to-accept?pageSize=6&page=1')
        return response
    } catch (error) {
        console.log(error);
    }
}
const Accept = async (id) => {
    try {
        const response = await axios.post(`admin/accept-upgrade-account?user_id=${id}`)
        return response
    } catch (error) {
        console.log(error);
    }
}

const OutReject = async (id) => {
    try {
        const response = await axios.post(`admin/reject-upgrade-account?user_id=${id}`)
        return response
    } catch (error) {
        console.log(error);
    }
}
const viewListReport = async (page, pagesize) => {
    try {
        const response = await axios.get(`admin/view-list-ban-report-post?pageSize=${pagesize}&page=${page}`)
        return response;
    } catch (error) {
        console.log(error);
    }
}

const viewPremium = async (page, pagesize) => {
    try {
        const response = await axios.get(`admin/view-list-accepted-upgrade-account?pageSize=${pagesize}&page=${page}`)
        return response
    } catch (error) {
        console.log(error);
    }
}

export { WatingList, Accept, OutReject, viewListReport, viewPremium }