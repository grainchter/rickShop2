import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() item:any;

  constructor(private router: Router,
    private route: ActivatedRoute) {
      console.log(this.route)
    }

  // characterId = this.route.snapshot.paramMap.get('characterId');
}
