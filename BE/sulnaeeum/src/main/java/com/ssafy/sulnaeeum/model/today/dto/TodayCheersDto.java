package com.ssafy.sulnaeeum.model.today.dto;

import com.ssafy.sulnaeeum.model.today.entity.Cheers;
import io.swagger.v3.oas.annotations.media.Schema;

public class TodayCheersDto {
    @Schema(description = "오늘의 건배사 아이디")
    private Long todayId;

    @Schema(description = "오늘의 건배사 앞글자")
    private String todayName;

    @Schema(description = "오늘의 건배사 내용")
    private String todayContent;

    public TodayCheersDto(Cheers cheers){
        this.todayId = cheers.getCheersId();
        this.todayName = cheers.getCheersName();
        this.todayContent = cheers.getCheersContent();
    }
}
