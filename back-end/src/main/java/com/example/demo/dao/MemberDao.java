package com.example.demo.dao;

import java.util.List;
import java.util.Map;

import com.example.demo.vo.MemberVO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Repository
@RequiredArgsConstructor
public class MemberDao {
    //@Autowired
    private final SqlSessionTemplate sqlSessionTemplate;

    public List<Map<String, Object>> memberList(MemberVO dvo) {
        List<Map<String, Object>> list = null;

        list = sqlSessionTemplate.selectList("memberList", dvo);
        return list;
    }// end of deptList

    // 회원로그인 및 회원리스트
    public List<Map<String, Object>> memberLogin (Map<String,Object> pmap) {
        List<Map<String, Object>> list = null;
        list = sqlSessionTemplate.selectList("memberList", pmap);
        //list = sqlSessionTemplate.selectList("memberLogin", pmap);
        return list;
    }

    public int memberInsert(Map<String, Object> pmap) {
        int result = -1;
        result = sqlSessionTemplate.insert("memberInsert", pmap);
        log.info(result);
        return result;
    }

    public int memberUpdate(Map<String, Object> pmap) {
        int result = -1;
        result = sqlSessionTemplate.update("memberUpdate", pmap);
        log.info(result);
        return result;
    }

    public int memberDelete(MemberVO dvo) {
        int result = -1;
        result = sqlSessionTemplate.delete("memberDelete", dvo);
        log.info(result);
        return result;
    }

}// end of DeptDao