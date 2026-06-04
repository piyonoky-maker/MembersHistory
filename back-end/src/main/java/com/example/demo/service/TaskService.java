package com.example.demo.service;

import com.example.demo.dao.TaskDao;
import com.example.demo.vo.TaskVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

// 모델 계층 - 비즈니스 로직처리(업무 프로세스)
@Service
@Log4j2
@RequiredArgsConstructor
public class TaskService {
    @Autowired
    private TaskDao taskDao;

    public List<Map<String, Object>> taskList(TaskVO dvo) {
        //log.info("historyList \n\n"+dvo.getHistoryName());
        List<Map<String, Object>> list = null;
        list = taskDao.taskList(dvo);
        return list;
    }
    public int taskInsert(Map<String,Object> pmap) {
        log.info("taskInsert");
        int result = -1;
        result = taskDao.taskInsert(pmap);
        return result;
    }//end of deptInsert
    public int taskUpdate(Map<String,Object> pmap) {
        log.info("taskUpdate");
        int result = -1;
        result = taskDao.taskUpdate(pmap);
        return result;
    }
    public int taskDelete(TaskVO dvo) {
        log.info("taskService");
        int result = -1;
        result = taskDao.taskDelete(dvo);
        return result;
    }
}

