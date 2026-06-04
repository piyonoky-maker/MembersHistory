package com.example.demo.dao;

import java.util.List;
import java.util.Map;

import com.example.demo.vo.HistoryVO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Repository
@RequiredArgsConstructor
public class HistoryDao {
    //@Autowired
    private final SqlSessionTemplate sqlSessionTemplate;

    public List<Map<String, Object>> historyList(HistoryVO dvo) {
        List<Map<String, Object>> list = null;
        list = sqlSessionTemplate.selectList("historyList", dvo);
        log.info(list);
        return list;
    }// end of deptList

    public int historyInsert(Map<String, Object> pmap) {
        int result = -1;
        result = sqlSessionTemplate.insert("historyInsert", pmap);
        log.info(result);
        return result;
    }

    public int historyUpdate(Map<String, Object> pmap) {
        int result = -1;
        result = sqlSessionTemplate.update("historyUpdate", pmap);
        log.info(result);
        return result;
    }

    public int historyDelete(HistoryVO dvo) {
        int result = -1;
        result = sqlSessionTemplate.delete("historyDelete", dvo);
        log.info(result);
        return result;
    }

}// end of DeptDao