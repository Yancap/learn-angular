import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [TestService]
})
export class ServicesComponent {
  public data: any[] = [];
  constructor(private testService: TestService) {}
  show(){
    this.data = this.testService.get().map(item => (
      `Nome: ${item.name} Idade: ${item.age}`
    ))
  }
}
