package com.ssafy.sulnaeeum.model.user.repo;

import com.ssafy.sulnaeeum.model.user.entity.User;
import com.ssafy.sulnaeeum.model.user.entity.UserPreference;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserPreferenceRepo extends JpaRepository<UserPreference, Long> {

    Optional<UserPreference> findByUser(User user);
}
