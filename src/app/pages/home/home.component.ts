import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  resposta!: string;
  respostaSelect: string = 'Todos';

  dados: any = [];
  days: any = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    
  }

  getWeather() {
    this.weatherService.weatherCatch(this.resposta)
    .then(data => {
      this.dados = data
      this.days = this.dados.results.forecast;
    }); 
  }

  filtraData(){
    this.days = this.dados.results.forecast;
    if(this.respostaSelect !== "Todos"){
      this.days = this.days.filter((el:any) => el.date == this.respostaSelect);
    }else{
      this.days = this.dados.results.forecast;
    }
  }
}
