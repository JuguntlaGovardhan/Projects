package com.wipro.Dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.model.User;

 

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    boolean existsByEmail(String email);

	Optional<User> findByemail(String email);
}