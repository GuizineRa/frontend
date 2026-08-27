package main.java.com.example.backend.controller;

import com.example.backend.model.Recurso;
import com.example.backend.repository.RecursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recursos")
@CrossOrigin(origins = "*")
public class RecursoController {

    @Autowired
    private RecursoRepository recursoRepository;

    // Listar todos os personal trainers / recursos
    @GetMapping
    public List<Recurso> listar() {
        return recursoRepository.findAll();
    }

    // Cadastrar novo recurso
    @PostMapping
    public Recurso criar(@RequestBody Recurso recurso) {
        return recursoRepository.save(recurso);
    }
}