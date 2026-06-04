package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import com.example.demo.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//응답 페이지를 jsp로 가져갈때는 아래를 사용함.
//import org.springframework.stereotype.Controller;
//응답 결과를 json, text/plain
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.vo.MemberVO;
import com.google.gson.Gson;

import lombok.extern.log4j.Log4j2;

/*
MVC패턴 기준
컨트롤계층 - 사용자가 입력한 값 청취, 응답페이지에 대한 결과 처리(html, json)
서블릿과는 달리 서블릿을 상속받지 않고 처리한다. - 대신 어노테이션을 사용함.
복잡한 환경 설정, 의존성 관리
http://localhost:8000/member/memberList
http://localhost:8000/member/memberDetail
http://localhost:8000/member/memberInsert
http://localhost:8000/member/memberUpdate
http://localhost:8000/member/memberDelete
*/

@Log4j2
@RestController
//@RequestMapping("/member/*")
public class MemberController {
	@Autowired
	private MemberService memberService;// 변수 이름은 줄여쓰지 않음.

	// http://localhost:8000/member/memberList
	@GetMapping("member/memberList")
	public String memberList(MemberVO dvo) {
		log.info("memberList호출");

		List<Map<String, Object>> list = null;
		//dvo.setSearchType("memId");
		//dvo.setKeyword("11");

		log.info("\n빈공란");
		log.info("searchType = "+dvo.getSearchType());
		log.info("keyWord = "+dvo.getKeyword());
		log.info(dvo);
		log.info("\n빈공란");

		list = memberService.memberList(dvo);

		String temp = null;
		Gson gson = new Gson();
		temp = gson.toJson(list);
		return temp;// application/json
	}

	// 회원로그인
	@PostMapping("member/memberLogin")
	public String memberLogin(@RequestBody Map<String, Object> pmap) {
		List<Map<String, Object>> list = null;

		System.out.println(pmap);

		list = memberService.memberLogin(pmap);

		String temp = null;
		Gson gson = new Gson();
		temp = gson.toJson(list);
		return temp;// application/json
	}

	// http://localhost:8000/member/memberDetail?memSeq=1
	@GetMapping("member/memberDetail")
	public String memberDetail() {
		log.info("memberDetail호출");
		return "memberDetail";
	}

	@PostMapping("member/memberInsert")
	public String memberInsert(@RequestBody Map<String, Object> pmap) {
		log.info("memberInsert호출");
		log.info(pmap);
		int result = -1;
		result = memberService.memberInsert(pmap);
		return String.valueOf(result);// 이 반환값은 리액트 페이지로 반환됨
		// return "입력성공|실패";
	}

	@PutMapping("member/memberUpdate")
	public String memberUpdate(@RequestBody Map<String, Object> pmap) {
		log.info("memberUpdate호출");
		int result = 0;
		result = memberService.memberUpdate(pmap);
		return String.valueOf(result);// 1-> "1"
	}

	// http://localhost:8000/member/memberDelete?memSeq=1
	@DeleteMapping("member/memberDelete")
	public String memberDelete(MemberVO dvo) {
		log.info("memberDelete호출");
		log.info("MemberController에서 사용자가 선택한 부서 번호 : \n\n"+dvo.getMemSeq());
		log.info("mem_seq = "+ dvo);

		int result = -1;
		result = memberService.memberDelete(dvo);
		return String.valueOf(result);
	}
}