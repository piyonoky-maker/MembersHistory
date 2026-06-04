package com.example.demo.vo;

import lombok.Data;

@Data
public class HistoryVO {
    private String historySeq;
    private String companyName;
    private String companyTel;
    private String fromTo;
    private String createDate;
    private String memSeq;
//    private String memName;
//    private String memTel;

    // 검색용 변수
    private String searchType; //"MEM_NAME" | "MEM_TEL" | "MEM_ADDR"
    private String keyword; // 검색어
}
