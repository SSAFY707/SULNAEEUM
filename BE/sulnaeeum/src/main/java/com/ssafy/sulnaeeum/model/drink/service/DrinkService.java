package com.ssafy.sulnaeeum.model.drink.service;

import com.ssafy.sulnaeeum.exception.CustomException;
import com.ssafy.sulnaeeum.exception.CustomExceptionList;
import com.ssafy.sulnaeeum.model.drink.dto.*;
import com.ssafy.sulnaeeum.model.drink.entity.*;
import com.ssafy.sulnaeeum.model.drink.repo.*;
import com.ssafy.sulnaeeum.model.jumak.dto.JumakDto;
import com.ssafy.sulnaeeum.model.jumak.entity.Jumak;
import com.ssafy.sulnaeeum.model.jumak.repo.JumakRepo;
import com.ssafy.sulnaeeum.model.user.service.UserService;
import com.ssafy.sulnaeeum.util.FlaskUtil;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class DrinkService {

    @Autowired
    DrinkRepo drinkRepo;

    @Autowired
    DrinkTypeRepo drinkTypeRepo;

    @Autowired
    LikeDrinkRepo likeDrinkRepo;

    @Autowired
    UserService userService;

    @Autowired
    ReviewRepo reviewRepo;

    @Autowired
    JumakRepo jumakRepo;

    @Autowired
    IngredientTypeRepo ingredientTypeRepo;

    @Autowired
    DishRepo dishRepo;

    @Autowired
    TasteRepo tasteRepo;

    @Autowired
    FlaskUtil flaskUtil;

    // 모든 전통주 조회
    @Transactional
    public List<DrinkInfoDto> getAllDrink(Long drinkTypeId, String kakaoId, String sortType) {

        List<DrinkInfoDto> drinkInfoDtoList;
        List<Drink> drinkList;
        if(drinkTypeId == 0) {
            switch (sortType) {
                case "이름" :
                    drinkList = drinkRepo.findAllSortByName();
                    break;
                case "인기" :
                    drinkList = drinkRepo.findAllSortByPopularity();
                    break;
                case "낮은도수" :
                    drinkList = drinkRepo.findAllSortByLevelAsc();
                    break;
                case "높은도수" :
                    drinkList = drinkRepo.findAllSortByLevelDesc();
                    break;
                default:
                    throw new CustomException(CustomExceptionList.SORT_TYPE_NOT_FOUND);
            }
        } else if(drinkTypeId > 0 && drinkTypeId < 6) {
            switch (sortType) {
                case "이름" :
                    drinkList = drinkRepo.findSortByName(drinkTypeId);
                    break;
                case "인기" :
                    drinkList = drinkRepo.findSortByPopularity(drinkTypeId);
                    break;
                case "낮은도수" :
                    drinkList = drinkRepo.findSortByLevelAsc(drinkTypeId);
                    break;
                case "높은도수" :
                    drinkList = drinkRepo.findSortByLevelDesc(drinkTypeId);
                    break;
                default:
                    throw new CustomException(CustomExceptionList.SORT_TYPE_NOT_FOUND);
            }
        } else {
            throw new CustomException(CustomExceptionList.CATEGORY_NOT_FOUND);
        }
        drinkInfoDtoList = drinkList.stream().map(DrinkInfoDto::new).collect(Collectors.toList());

        return drinkInfoDtoList;
    }

    // drinkId로 DrinkDto 가져오기
    public DrinkDto findDrink(Long drinkId) {
        Optional<Drink> drink = drinkRepo.findByDrinkId(drinkId);
        if(drink.isEmpty()) {
            throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
        }
        return drink.get().toDto();
    }

    // 전통주 상세 페이지의 모든 정보 가져오기
    @Transactional
    public DrinkDetailPageDto getDrinkDetailPage(Long drinkId, String kakaoId) {
        DrinkDetailPageDto drinkDetailPageDto = new DrinkDetailPageDto();

        // 전통주 기본 정보
        Optional<Drink> drink = drinkRepo.findByDrinkId(drinkId);
        if(drink.isEmpty()) {
            throw new CustomException(CustomExceptionList.ROW_NOT_FOUND);
        }
        DrinkDetailDto drinkDetailDto = drink.get().toDrinkDetailDto();

        // 맛 세팅
        findTaste(drinkId, drinkDetailDto);


        // 재료 세팅
        drinkDetailDto.setIngredient(ingredientTypeRepo.findIngredientName(drinkId));


        // 어울리는 안주 세팅
        drinkDetailDto.setDishName(dishRepo.findDishName(drinkId));

        // 회원 접근일 때
        if(kakaoId != null) {
            Long userId = userService.findUserId(kakaoId);

            // 찜 여부 세팅
            Optional<LikeDrink> likeDrink = likeDrinkRepo.findLikeInfo(drinkId, userId);
            if(likeDrink.isPresent()) {
                drinkDetailDto.setLike(true);
            }

            // 클리어 여부 세팅
            Optional<Review> review = reviewRepo.findMyReview(userId, drinkId);
            if(review.isPresent()) {
                drinkDetailDto.setClear(true);
            }
        }

        drinkDetailPageDto.setDrinkDetailDto(drinkDetailDto);

        // 리뷰 세팅
        List<Review> reviewList = reviewRepo.findAllByDrinkId(drinkId);
        List<ReviewResponseDto> reviewResponseDtoList = reviewList.stream().map(ReviewResponseDto::new).collect(Collectors.toList());
        drinkDetailPageDto.setReviewResponseDto(reviewResponseDtoList);

        // 전통주 식당 세팅
        List<Jumak> jumakList = jumakRepo.findByDrink(drinkId);
        List<JumakDto> jumakDtoList = jumakList.stream().map(JumakDto::new).collect(Collectors.toList());
        drinkDetailPageDto.setJumakDto(jumakDtoList);

        // 비슷한 추천 술 세팅
        drinkDetailPageDto.setSimilarDrinkDto(similarDrink(drinkDetailDto));

        return drinkDetailPageDto;
    }

    // 맛 세팅
    public DrinkDetailDto findTaste(Long drinkId, DrinkDetailDto drinkDetailDto) {
        List<Taste> tasteList = tasteRepo.findTaste(drinkId);
        List<TasteDto> tasteDtoList = tasteList.stream().map(TasteDto::new).collect(Collectors.toList());

        for(TasteDto tasteDto: tasteDtoList) {
            Long tasteTypeId = tasteDto.getTasteType();
            if (tasteTypeId == 1) {
                drinkDetailDto.setTasteSweet(tasteDto.getScore());
            } else if (tasteTypeId == 2) {
                drinkDetailDto.setTasteSour(tasteDto.getScore());
            } else if (tasteTypeId == 3) {
                drinkDetailDto.setTasteBody(tasteDto.getScore());
            } else if (tasteTypeId == 4) {
                drinkDetailDto.setTasteRefresh(tasteDto.getScore());
            } else if (tasteTypeId == 5) {
                drinkDetailDto.setTasteFlavor(tasteDto.getScore());
            } else if (tasteTypeId == 6) {
                drinkDetailDto.setTasteThroat(tasteDto.getScore());
            } else {
                throw new CustomException(CustomExceptionList.RUNTIME_EXCEPTION);
            }
        }

        return drinkDetailDto;
    }

    // 비슷한 술 추천
    public SimilarDrinkDto similarDrink(DrinkDetailDto drinkDetailDto) {

        // 비슷한 술 추천을 위한 Flask 연동
        List<Integer> inputData = new ArrayList<>();
        inputData.add(drinkDetailDto.getTasteSweet());
        inputData.add(drinkDetailDto.getTasteSour());
        inputData.add(drinkDetailDto.getTasteRefresh());
        inputData.add(drinkDetailDto.getTasteFlavor());
        inputData.add(drinkDetailDto.getTasteThroat());
        inputData.add(drinkDetailDto.getTasteBody());
        inputData.add(drinkDetailDto.getDrinkLevel());

        int[] dishArr = {0, 0, 0, 0, 0, 0};
        if(drinkDetailDto.getDishName().size() > 0) {
            String dishName = dishRepo.findByDishName(drinkDetailDto.getDishName().get(0));

            if(dishName.equals("전/무침")) {
                dishArr = new int[] {3, 0, 0, 0, 0, 0};
            } else if(dishName.equals("육류")) {
                dishArr = new int[] {0, 3, 0, 0, 0, 0};
            } else if(dishName.equals("해산물")) {
                dishArr = new int[] {0, 0, 3, 0, 0, 0};
            } else if(dishName.equals("탕/전골")) {
                dishArr = new int[] {0, 0, 0, 3, 0, 0};
            } else if(dishName.equals("양식")) {
                dishArr = new int[] {0, 0, 0, 0, 3, 0};
            } else if(dishName.equals("디저트")) {
                dishArr = new int[] {0, 0, 0, 0, 0, 3};
            } else {
                throw new CustomException(CustomExceptionList.CATEGORY_NOT_FOUND);
            }
        }
        for(int i = 0; i < 6; i++) {
            inputData.add(dishArr[i]);
        }

        inputData.add(drinkDetailDto.getDrinkId().intValue());

        Map<String, List> params = new HashMap<>();
        params.put("input_data", inputData);

        // Flask 요청 후 반환받기
        String requestUrl = "http://j8a707.p.ssafy.io:5000/recommend/similar";
        JSONObject jsonObject = flaskUtil.requestFlask(requestUrl, params);
        SimilarDrinkDto similarDrinkDto = new SimilarDrinkDto((JSONObject)jsonObject.get("0"));

        return similarDrinkDto;
    }
}
