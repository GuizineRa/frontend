package main.java.com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    // Método auxiliar para encontrar o cliente pelo email na hora do login
    Optional<Cliente> findByEmail(String email);
} 