package com.ssafy.sulnaeeum.model.map.service;

import com.ssafy.sulnaeeum.model.map.repo.MapRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MapService {

    @Autowired
    MapRepo mapRepo;
}
