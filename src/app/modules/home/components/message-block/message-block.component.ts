import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
export class MessageBlockComponent extends BaseComponent implements OnInit {
  messageSent: string | null | undefined = window.localStorage.getItem('messageSent') || null;

  form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.pattern(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/), Validators.required]),
    subject: new FormControl(null, [Validators.required]),
    message: new FormControl(null, [Validators.required]),
    token: new FormControl(null)
  })

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef
  ) {
    super();

  }

  ngOnInit() {
    this.loadScript('https://smartcaptcha.yandexcloud.net/captcha.js?render=onload')
      .then(_ => {
        const w = (window as any);
        if (!w['smartCaptcha']) {
          return;
        }

        w['smartCaptcha']?.render('captcha-container', {
          sitekey: 'ysc1_PiASlAngeesQ4EzSkHAGEXuQOoow1LeFafYzABobc8070f3b',
          invisible: true, // Сделать капчу невидимой,
          callback: this.send.bind(this)
        });
      });
  }

  loadScript(scriptSrc: string): Promise<void> {
    const sc = document.createElement('script');
    sc.async = true;
    sc.type = 'text/javascript';
    sc.src = scriptSrc;
    document.body.appendChild(sc);
    return new Promise(res => (sc.onload = () => res()));
  }

  handleSubmit(): void {
    const w = (window as any);

    if (!w.smartCaptcha) {
      return;
    }

    w.smartCaptcha.execute();
  }

  private send(): void {
    loader(true);
    const token = (document.querySelector('[name="smart-token"]') as any)?.value;
    this.form.controls.token.setValue(token as any);
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
