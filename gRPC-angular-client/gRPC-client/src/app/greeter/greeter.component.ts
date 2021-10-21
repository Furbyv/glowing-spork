import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HelloReply, HelloRequest } from '../proto/greet_pb';
import { GreeterClient, ServiceError } from '../proto/greet_pb_service';
import { WozObjectReply, WozObjectRequestById } from '../proto/wozobject_pb';
import { WozObjectsClient } from '../proto/wozobject_pb_service';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.scss'],
})
export class GreeterComponent implements OnInit {
  response: string = '';

  ngOnInit(): void {
    const client = new WozObjectsClient(environment.baseUrl);
    const req = new WozObjectRequestById();
    req.setWozobjectnummer(1);
    client.getWozObject(
      req,
      (err: ServiceError | null, response: WozObjectReply | null) => {
        if (err) {
          this.response = `Error: ${err.message}`;
          return;
        }
        this.response = response!.getWozobjectnummer() + '';
      }
    );
  }
}
