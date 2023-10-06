import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {customScript} from "@app/custom.script";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'nepeinann';

  ngOnInit(): void {
    customScript();
  }
}



