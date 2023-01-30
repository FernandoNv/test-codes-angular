import { Component, Input } from '@angular/core';
import { IAnimais } from '../animal';

@Component({
  selector: 'app-grade-fotos-animais',
  templateUrl: './grade-fotos-animais.component.html',
  styleUrls: ['./grade-fotos-animais.component.scss'],
})
export class GradeFotosAnimaisComponent {
  @Input()
  public animais!: IAnimais;
}
