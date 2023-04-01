package com.ssafy.sulnaeeum.model.jumak.dto;

import com.ssafy.sulnaeeum.model.jumak.entity.MyJumak;
import com.ssafy.sulnaeeum.model.user.dto.UserDto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Schema(description = "찜한 전통주 식당")
@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class MyJumakDto {

    @Schema(description = "아이디 (auto_increment)")
    private Long myJumakId;

    @Schema(description = "식당")
    private JumakDto jumakDto;

    @Schema(description = "회원")
    private UserDto userDto;

    // 생성자
    public MyJumakDto(JumakDto jumakDto, UserDto userDto) {
        this.jumakDto = jumakDto;
        this.userDto = userDto;
    }

    // 생성자 (List<MyJumak> -> List<MyJumakDto> 변환을 위함)
    public MyJumakDto(MyJumak myJumak) {
        this.myJumakId = myJumak.getMyJumakId();
        this.jumakDto = myJumak.getJumak().toDto();
        this.userDto = myJumak.getUser().toDto();
    }

    // DTO -> Entity 변환
    public MyJumak toEntity() {
        return MyJumak.builder()
                .myJumakId(this.myJumakId)
                .jumak(this.jumakDto.toEntity())
                .user(this.userDto.toEntity()).build();
    }
}
