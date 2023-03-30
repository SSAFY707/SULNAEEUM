package com.ssafy.sulnaeeum.model.user.repo;

import com.ssafy.sulnaeeum.model.user.entity.UserPreference;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserPreferenceRepo extends JpaRepository<UserPreference, Long> {
}
