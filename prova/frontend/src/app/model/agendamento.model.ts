export interface Agendamento {
  id?: number;
  clienteId: number;
  recursoId: number;
  dataAgendamento: string; // Formato "YYYY-MM-DD"
  horaAgendamento: string; // Formato "HH:mm" ou "HH:mm:ss"
  observacoes?: string;
}
