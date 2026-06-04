package com.example.demo.vo;

import lombok.Data;

@Data
public class MemberVO {
    private String memName;
    private String memTel;
    private String memImg;
    private String memAddr;
    private String memSeq;
    private String memId;
    private String memPass;
    private String createDate;


    // 검색용 변수
    private String searchType; //분류: "deptno" | "dname" | "loc"
    private String keyword; // 검색어
}
