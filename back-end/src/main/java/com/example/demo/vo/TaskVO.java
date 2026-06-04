package com.example.demo.vo;

import lombok.Data;

@Data
public class TaskVO {
    private String taskSeq;
    private String taskDetail;
    private String createDate;
    private String linkUrl;
    private String addFile;
    private String historySeq;

//    private String memName;
//    private String memTel;

    // 검색용 변수
    private String searchType; //"MEM_NAME" | "MEM_TEL" | "MEM_ADDR"
    private String keyword; // 검색어
}
