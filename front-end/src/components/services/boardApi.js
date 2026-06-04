// spring boot 연동하기
import axios from "axios";

// http://localhost:8000/board/commentInsert
export const reCommentInsertDB = async (comment) => {
    console.log(comment)
    const res = await axios({
        method: 'post',
        url: import.meta.env.VITE_SPRING_IP + 'board/commentInsert',
        data: comment
    })
    return res
}//end of reCommentInsertDB
// 댓글 수정 구현
export const reCommentUpdateDB = async (cmt) => {
    //사용자가 입력한 값을 출력해 보기
    console.log(cmt)
    try {
        const res = await axios({
            method: 'put', 
            url: import.meta.env.VITE_SPRING_IP+'board/commentUpdate',
            data: cmt
        })
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}//end of reCommentUpdateDB

// http://localhost:8000/board/commentDelete
export const reCommentDeleteDB = async (bc_no) => {
    console.log(bc_no)
    const res = await axios({
        method: 'delete',
        url: import.meta.env.VITE_SPRING_IP + 'board/commentDelete?bc_no=' + bc_no
    })
    return res
}
// http://localhost:8000/board/boardList
export const boardListDB = async (board) => {
    console.log(JSON.stringify(board))
    const res = await axios({
        method: 'get',
        url: import.meta.env.VITE_SPRING_IP + 'board/boardList',
        params: board
    })
    return res
}

export const boardDetailDB = async (b_no) => {
    console.log(b_no)
    const res = await axios({
        method: 'get',
        url: import.meta.env.VITE_SPRING_IP + 'board/boardDetail?b_no=' + b_no
    })
    console.log(res.data)
    return res
}

//http://localhost:8000/api/board/boardInsert
export const boardInsertDB = (board) => {
    //console.log(board)[Object Object]
    console.log(JSON.stringify(board)) //JSON.stringify(), JSON.parse()
    try {
        const res = axios({
            method: 'post',
            url: import.meta.env.VITE_SPRING_IP+'board/boardInsert',
            data: board
        })
        return res
    } catch (error) {
        console.log(error)
        return error
    }//end of try..catch
}//end of boardInsertDB

// http://localhost:8000/board/boardUpdate
export const boardUpdateDB = async (board) => {
    console.log(JSON.stringify(board))
    const res = await axios({
        method: 'put',
        url: import.meta.env.VITE_SPRING_IP + 'board/boardUpdate',
        data: board
    })
    return res
}

// http://localhost:8000/board/boardDelete?b_no=
export const boardDeleteDB = async (b_no) => {
    console.log(b_no)
    const res = await axios({
        method: 'delete',
        url: import.meta.env.VITE_SPRING_IP + 'board/boardDelete?b_no=' + b_no,
    })
    return res
}


export const uploadImageDB =  async(file) => {
    console.log(file)
    const response = await axios({
        method: 'post',
        url: `${import.meta.env.VITE_SPRING_IP}board/imageUpload`,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: file,
    })
    return response.data 
}
