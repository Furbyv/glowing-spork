import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { WozObjectReply } from 'src/app/proto/wozobject_pb';
import { ObjectSearchService } from '../../services/object-search.service';

@UntilDestroy()
@Component({
  selector: 'app-object-details',
  templateUrl: './object-details.component.html',
  styleUrls: ['./object-details.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectDetailsComponent implements OnInit {
  id: number | undefined;
  wozObject: WozObjectReply.AsObject | undefined;

  constructor(
    private route: ActivatedRoute,
    private objectSearchService: ObjectSearchService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(untilDestroyed(this)).subscribe((params: Params) => {
      this.id = +params['id'];
      //this.wozObject = this.objectSearchService.getWozObject(this.id);
    });
  }
}
