package com.example.demo.dao;

import com.example.demo.vo.TaskVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Log4j2
@Repository
@RequiredArgsConstructor
public class TaskDao {
    //@Autowired
    private final SqlSessionTemplate sqlSessionTemplate;

    public List<Map<String, Object>> taskList(TaskVO dvo) {
        List<Map<String, Object>> list = null;
        list = sqlSessionTemplate.selectList("taskList", dvo);
        log.info(list);
        return list;
    }// end of deptList

    public int taskInsert(Map<String, Object> pmap) {
        int result = -1;
        result = sqlSessionTemplate.insert("taskInsert", pmap);
        log.info(result);
        return result;
    }

    public int taskUpdate(Map<String, Object> pmap) {
        int result = -1;
        result = sqlSessionTemplate.update("taskUpdate", pmap);
        log.info(result);
        return result;
    }

    public int taskDelete(TaskVO dvo) {
        int result = -1;
        result = sqlSessionTemplate.delete("taskDelete", dvo);
        log.info(result);
        return result;
    }

}// end of DeptDao