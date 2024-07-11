import { Component, Input } from '@angular/core';
import { Claim } from '../../models/claim';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.scss'
})
export class ClaimsComponent {
  @Input() claims: Claim[] = [];
}
