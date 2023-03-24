package com.ssafy.sulnaeeum.model.map.service;

import com.ssafy.sulnaeeum.exception.CustomException;
import com.ssafy.sulnaeeum.exception.CustomExceptionList;
import com.ssafy.sulnaeeum.model.map.dto.*;
import com.ssafy.sulnaeeum.model.map.entity.Brewery;
import com.ssafy.sulnaeeum.model.map.entity.Map;
import com.ssafy.sulnaeeum.model.map.entity.Program;
import com.ssafy.sulnaeeum.model.map.repo.BreweryRepo;
import com.ssafy.sulnaeeum.model.map.repo.MapRepo;
import com.ssafy.sulnaeeum.model.map.repo.ProgramRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MapService {

    @Autowired
    MapRepo mapRepo;

    @Autowired
    BreweryRepo breweryRepo;

    @Autowired
    ProgramRepo programRepo;

    // 모든 양조장 및 체험 프로그램의 정보를 가공하여 제공
    @Transactional
    public List<MapInfoDto> getMapInfo() {
        List<Map> mapList = mapRepo.findAll();
        List<MapDto> mapDtoList = mapList.stream().map(MapDto::new).collect(Collectors.toList());
        if(mapDtoList.isEmpty()) {
            throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
        }
        List<MapInfoDto> mapInfoDtoList = new ArrayList<>();

        // 모든 지역을 차례대로 확인하며 데이터 셋 가공
        for(MapDto mapDto: mapDtoList) {
            MapInfoDto mapInfoDto = new MapInfoDto();
            Long mapId = mapDto.getMapId();

            mapInfoDto.setMapId(mapId);
            ListDto listDto = new ListDto();

            listDto.setBreweryDtoList(getBreweryInfo(mapId));
            listDto.setProgramDtoList(getProgramInfo(mapId));
            mapInfoDto.setListDto(listDto);

            mapInfoDtoList.add(mapInfoDto);
        }

        return mapInfoDtoList;
    }

    // 지역에 해당하는 모든 양조장 정보 찾기
    public List<BreweryDto> getBreweryInfo(Long mapId) {
        List<Brewery> breweryList = breweryRepo.findByMapId(mapId);
        List<BreweryDto> breweryDtoList = breweryList.stream().map(BreweryDto::new).collect(Collectors.toList());
        if(breweryDtoList.isEmpty()) {
            throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
        }

        return breweryDtoList;
    }

    // 지역에 해당하는 모든 체험 프로그램 정보 찾기
    public List<ProgramDto> getProgramInfo(Long mapId) {
        List<Program> programList = programRepo.findByMapId(mapId);
        List<ProgramDto> programDtoList = programList.stream().map(ProgramDto::new).collect(Collectors.toList());
        if(programDtoList.isEmpty()) {
            throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
        }

        return programDtoList;
    }
}
