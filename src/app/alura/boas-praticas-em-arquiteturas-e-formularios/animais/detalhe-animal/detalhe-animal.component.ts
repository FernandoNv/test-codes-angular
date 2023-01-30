import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { AnimaisService } from '../animais.service';
import { IAnimal } from '../animal';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.scss'],
})
export class DetalheAnimalComponent implements OnInit {
  public animalId!: number;
  public animal$!: Observable<IAnimal>;

  constructor(
    private animaisService: AnimaisService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params['animalId'] as number;
    this.animal$ = this.animaisService.buscaPorId(this.animalId);
  }

  curtir() {
    this.animaisService
      .curtir(this.animalId)
      .pipe(take(1))
      .subscribe((curtida) => {
        if (curtida) {
          this.animal$ = this.animaisService.buscaPorId(this.animalId);
        }
      });
  }

  //prettier-ignore
  excluir() {
    this.animaisService
      .excluirAnimal(this.animalId)
      .pipe(take(1))
      .subscribe(
        () => {
          this.router.navigate(['../../animais'], { relativeTo: this.activatedRoute});
        },
        (error) => console.log(error)
      );
  }
}
