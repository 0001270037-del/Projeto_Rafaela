import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-botao',
  styleUrl: './botao.css',
  templateUrl: './botao.html',
})
export class Botao {
  @Input() texto:string='Clique aqui';
  @Input()cor:string= '#2563eb;'
}
