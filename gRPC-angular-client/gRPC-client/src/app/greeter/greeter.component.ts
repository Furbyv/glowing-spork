import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HelloReply, HelloRequest } from '../proto/greet_pb';
import { GreeterClient, ServiceError } from '../proto/greet_pb_service';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.scss'],
})
export class GreeterComponent implements OnInit {
  response: string = '';

  ngOnInit(): void {
    const client = new GreeterClient(environment.baseUrl);
    const req = new HelloRequest();
    req.setName('World!');
    client.sayHello(
      req,
      (err: ServiceError | null, response: HelloReply | null) => {
        if (err) {
          this.response = `Error: ${err.message}`;
          return;
        }
        this.response = response!.getMessage();
      }
    );
  }
}
