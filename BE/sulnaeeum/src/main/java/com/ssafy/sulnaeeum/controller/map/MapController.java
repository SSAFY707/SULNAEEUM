package com.ssafy.sulnaeeum.controller.map;

import com.ssafy.sulnaeeum.model.map.dto.MapInfoDto;
import com.ssafy.sulnaeeum.model.map.service.MapService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/map")
@Slf4j
@Tag(name = "MapController", description = "전통주 지도 API")
public class MapController {

    @Autowired
    MapService mapService;

    /***
     * [지도 정보 조회]
     * - 지역별 양조장, 체험 프로그램 정보 가공
     ***/
    @Operation(summary = "전통주 지도 조회", description = "전통주 지도 조회")
    @GetMapping("/n")
    public ResponseEntity<List<MapInfoDto>> getMapInfo() {
        return new ResponseEntity<>(mapService.getMapInfo(), HttpStatus.OK);
    }
}
