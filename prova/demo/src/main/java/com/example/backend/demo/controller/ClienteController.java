package main.java.com.example.backend.controller;

import com.example.backend.model.Cliente;
import com.example.backend.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin(origins = "*")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    // Listar todos os clientes
    @GetMapping
    public List<Cliente> listar() {
        return clienteRepository.findAll();
    }

    // Cadastrar novo cliente
    @PostMapping
    public Cliente criar(@RequestBody Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    // Rota simples de Login
    @PostMapping("/login")
    public Cliente login(@RequestBody Cliente clienteLogin) {
        Optional<Cliente> clienteEncontrado = clienteRepository.findByEmail(clienteLogin.getEmail());

        if (clienteEncontrado.isPresent() && clienteEncontrado.get().getSenha().equals(clienteLogin.getSenha())) {
            return clienteEncontrado.get(); // Login bem-sucedido
        }

        throw new RuntimeException("Email ou senha inválidos!");
    }
}