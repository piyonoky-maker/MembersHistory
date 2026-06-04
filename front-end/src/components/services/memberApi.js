// spring boot 연동하기
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_SPRING_IP, // 예: http://localhost:8000/,
    timeout: 10000
})

export const loginUser2 = async (member) => {
    const res = await api.post('member/memberLogin', member)
    return res.data
}

// 로그인
//http://localhost:8000/member/memberLogin
export const loginUser = async (datas) => {
    try {
        const res = await axios({
            method: 'post',
            url: import.meta.env.VITE_SPRING_IP+'member/memberLogin',
            data: datas
        });
        //console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
        return error
    }
}

// 회원리스트
// http://localhost:8000/member/memberList
export const memberListDB = async (datas) => {
    //console.log(JSON.stringify(datas))
    const res = await axios({
        method: 'get',
        url: import.meta.env.VITE_SPRING_IP + 'member/memberList',
        params: datas       // data: datas??
    })
    //console.log(datas)
    return res.data
}

// 프로젝트 리스트
// http://localhost:8000/member/memberList
export const projectListDB = async (datas) => {
    //console.log(JSON.stringify(datas))
    const res = await axios({
        method: 'get',
        url: import.meta.env.VITE_SPRING_IP + 'history/historyList',
        params: datas       // data: datas??
    })
    //console.log(datas)
    return res.data
}




export const deptListDB = async () => {
    const res = await axios({
        method: 'get',
        url: import.meta.env.VITE_SPRING_IP + 'member/memberList'
    })
    return res.data;
}