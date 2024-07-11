import { Component, Input } from '@angular/core';
import { Claim } from '../../models/claim';

@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [],
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.scss'
})
export class ClaimsComponent {
  @Input() claims: Claim[] = [];
}
