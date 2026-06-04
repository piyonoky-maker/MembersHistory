package com.example.demo.service;

import java.util.List;
import java.util.Map;

import com.example.demo.dao.HistoryDao;
import com.example.demo.vo.HistoryVO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import lombok.extern.log4j.Log4j2;
// 모델 계층 - 비즈니스 로직처리(업무 프로세스)
@Service
@Log4j2
@RequiredArgsConstructor
public class HistoryService {
    @Autowired
    private HistoryDao historyDao;

    public List<Map<String, Object>> historyList(HistoryVO dvo) {
        List<Map<String, Object>> list = null;
        list = historyDao.historyList(dvo);
        return list;
    }

    public int historyInsert(Map<String,Object> pmap) {
        log.info("historyInsert");
        int result = -1;
        result = historyDao.historyInsert(pmap);
        return result;
    }//end of deptInsert

    public int historyUpdate(Map<String,Object> pmap) {
        log.info("historyUpdate");
        int result = -1;
        result = historyDao.historyUpdate(pmap);
        return result;
    }
    public int historyDelete(HistoryVO dvo) {
        log.info("HistoryService");
        int result = -1;
        result = historyDao.historyDelete(dvo);
        return result;
    }
}

