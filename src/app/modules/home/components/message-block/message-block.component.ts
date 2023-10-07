import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "@app/modules/home/services/api.service";
import {loader} from "@app/loader.script";
import {BaseComponent} from "@app/modules/core/components/base-component/base-component";

@Component({
  selector: 'app-message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageBlockComponent extends BaseComponent{
  messageSent: string | null | undefined = window.localStorage.getItem('messageSent') || null;

  form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.pattern(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/), Validators.required]),
    subject: new FormControl(null, [Validators.required]),
    message: new FormControl(null, [Validators.required]),
  })

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef
  ) {
    super();
  }

  send(): void {
    loader(true);
    this.apiService.postMessage(this.form.getRawValue())
      .subscribe(_ => {
        const name = this.form.value.name;
        window.localStorage.setItem('messageSent', '' + name);
        this.messageSent = name;
        loader(false);
        this.cdr.markForCheck();
      }, s => loader(false));
  }
}
