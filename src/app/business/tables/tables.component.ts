import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule, FormsModule], // Asegúrate de incluir FormsModule aquí
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export default class TablesComponent {
  trabajador = {
    nombre: 'Juan',
  apellido: 'Pérez',
  rut: '12.345.678-9',
  edad: 30,
  direccion: '123 Calle Falsa',
  fechaContratacion: new Date(), // Ajusta según sea necesario
  telefono: '123456789',
  email: 'juan.perez@example.com',
  cargo: '',
  faena: '',
    fotoUrl: 'img/istockphoto-1386479313-612x612.jpg' // Reemplaza esto con la ruta a la foto del trabajador
  };

  faenas = [
    { nombre: 'Faena 1' },
    { nombre: 'Faena 2' },
    { nombre: 'Faena 3' }
  ]; // Aquí define las faenas disponibles
  cargos = ['Operario', 'Supervisor', 'Gerente', 'Administrativo'];
  
  constructor(private router: Router) {}
  
  irAAgregarTrabajador() {
    this.router.navigate(['/agregar-trabajador']);
  }
}
