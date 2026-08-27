package main.java.com.example.backend.controller;

import com.example.backend.model.Agendamento;
import com.example.backend.repository.AgendamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/agendamentos")
@CrossOrigin(origins = "*")
public class AgendamentoController {

    @Autowired
    private AgendamentoRepository agendamentoRepository;

    // Listar todos os agendamentos
    @GetMapping
    public List<Agendamento> listar() {
        return agendamentoRepository.findAll();
    }

    // Criar um novo agendamento (validando se o horário já está ocupado)
    @PostMapping
    public Agendamento criar(@RequestBody Agendamento agendamento) {
        Optional<Agendamento> existente = agendamentoRepository.findByRecursoIdAndDataAgendamentoAndHoraAgendamento(
                agendamento.getRecursoId(),
                agendamento.getDataAgendamento(),
                agendamento.getHoraAgendamento());

        if (existente.isPresent()) {
            throw new RuntimeException("Este horário já está ocupado para este personal trainer!");
        }

        return agendamentoRepository.save(agendamento);
    }

    // Cancelar/Deletar um agendamento pelo ID
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        agendamentoRepository.deleteById(id);
    }
}