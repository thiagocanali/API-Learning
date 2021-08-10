import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/service/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  resposta: string = '';
  meuCep: string = '89069140';
  respostaCep: string = '';
  obj: any;

  constructor(private cepService: CepService) { }

  ngOnInit(): void {

  }

  click(){
    console.log(this.resposta)
    this.cepService.getCep(this.resposta)
    .then(data => {
      this.obj = data
      console.log(this.obj)
    })
  }
}
