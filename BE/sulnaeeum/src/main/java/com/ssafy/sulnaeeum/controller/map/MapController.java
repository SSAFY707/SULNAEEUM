package com.ssafy.sulnaeeum.controller.map;

import com.ssafy.sulnaeeum.model.map.service.MapService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/map")
@Slf4j
@Tag(name = "MapController", description = "전통주 지도 API")
public class MapController {

    @Autowired
    MapService mapService;
}
