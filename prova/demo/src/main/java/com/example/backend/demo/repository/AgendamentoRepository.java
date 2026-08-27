package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {
    
    // Método para verificar se já existe um agendamento para o mesmo recurso na mesma data e hora
    Optional<Agendamento> findByRecursoIdAndDataAgendamentoAndHoraAgendamento(
        Long recursoId, LocalDate dataAgendamento, LocalTime horaAgendamento
    );
}