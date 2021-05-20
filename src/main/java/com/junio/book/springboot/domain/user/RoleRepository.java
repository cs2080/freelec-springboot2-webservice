package com.junio.book.springboot.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
}
