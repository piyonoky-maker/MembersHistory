package com.example.demo.service;

import java.util.List;
import java.util.Map;

import com.example.demo.dao.MemberDao;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.vo.MemberVO;

import lombok.extern.log4j.Log4j2;
// 모델 계층 - 비즈니스 로직처리(업무 프로세스)
@Service
@Log4j2
@RequiredArgsConstructor
public class MemberService {
    @Autowired
    private MemberDao memberDao;

    // 회원로그인
    public List<Map<String, Object>> memberLogin (Map<String,Object> pmap) {
        List<Map<String, Object>> list = null;
        list = memberDao.memberLogin(pmap);
        return list;
    }

    public List<Map<String, Object>> memberList(MemberVO dvo) {
        log.info("memberList");
        List<Map<String, Object>> list = null;
        list = memberDao.memberList(dvo);
        return list;
    }
    public int memberInsert(Map<String,Object> pmap) {
        log.info("memberInsert");
        int result = -1;
        result = memberDao.memberInsert(pmap);
        return result;
    }//end of deptInsert
    public int memberUpdate(Map<String,Object> pmap) {
        log.info("deptUpdate");
        int result = -1;
        result = memberDao.memberUpdate(pmap);
        return result;
    }
    public int memberDelete(MemberVO dvo) {
        log.info("MemberService");
        int result = -1;
        result = memberDao.memberDelete(dvo);
        return result;
    }
}

