package com.example.demo.controller;

import com.example.demo.service.HistoryService;
import com.example.demo.vo.HistoryVO;
import com.google.gson.Gson;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/*
MVC패턴 기준
컨트롤계층 - 사용자가 입력한 값 청취, 응답페이지에 대한 결과 처리(html, json)
서블릿과는 달리 서블릿을 상속받지 않고 처리한다. - 대신 어노테이션을 사용함.
복잡한 환경 설정, 의존성 관리
http://localhost:8000/history/historyList
http://localhost:8000/history/historyDetail
http://localhost:8000/history/historyInsert
http://localhost:8000/history/historyUpdate
http://localhost:8000/history/historyDelete
*/

@Log4j2
@RestController
//@RequestMapping("/history/*")
public class HistoryController {
	@Autowired
	private HistoryService historyService;// 변수 이름은 줄여쓰지 않음.

	//http://localhost:8000/history/historyList
	@GetMapping("history/historyList")
	public String historyList(HistoryVO dvo) {
		log.info("historyList호출");
		//log.info("dname : " + dvo.getDname());
		List<Map<String, Object>> list = null;
		list = historyService.historyList(dvo);
		String temp = null;
		Gson gson = new Gson();
		temp = gson.toJson(list);
		return temp;// application/json
	}

	//http://localhost:8000/history/historyDetail?historySeq=1
	@GetMapping("history/historyDetail")
	public String historyDetail() {
		log.info("historyDetail호출");
		return "historyDetail";
	}

	//http://localhost:8000/history/historyInsert
	@PostMapping("history/historyInsert")
	public String historyInsert(@RequestBody Map<String, Object> pmap) {
		log.info("historyInsert호출");
		log.info(pmap);
		int result = -1;
		result = historyService.historyInsert(pmap);
		return String.valueOf(result);// 이 반환값은 리액트 페이지로 반환됨
		// return "입력성공|실패";
	}

	//http://localhost:8000/history/historyUpdate
	@PutMapping("history/historyUpdate")
	public String historyUpdate(@RequestBody Map<String, Object> pmap) {
		log.info("historyUpdate호출");
		int result = 0;
		result = historyService.historyUpdate(pmap);
		return String.valueOf(result);// 1-> "1"
	}

	//http://localhost:8000/history/historyDelete?historySeq=1
	@DeleteMapping("history/historyDelete")
	public String historyDelete(HistoryVO dvo) {
		log.info("historyDelete호출");
		log.info("history_seq = "+ dvo);

		int result = -1;
		result = historyService.historyDelete(dvo);
		return String.valueOf(result);
	}
}