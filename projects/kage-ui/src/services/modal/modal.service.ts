import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  inject,
  Injectable,
  Injector,
  Type,
} from '@angular/core';
import { KageModalHost } from './modal.component';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class KageModalCtrl {
  private hostRef?: ComponentRef<KageModalHost>;

  private injector = inject(Injector);
  private appRef = inject(ApplicationRef);
  private envInjector = inject(EnvironmentInjector);
  private document = inject(DOCUMENT);

  open<T>(component: Type<T>, componentInputs?: Partial<T>): ComponentRef<T> {
    if (this.hostRef) this.close();

    this.hostRef = createComponent(KageModalHost, {
      environmentInjector: this.envInjector,
      elementInjector: this.injector,
    });
    this.hostRef.instance.closed.subscribe(() => this.close());

    const compRef = createComponent(component, {
      environmentInjector: this.envInjector,
      elementInjector: this.injector,
    });

    if (componentInputs) {
      Object.assign(compRef.instance!, componentInputs);
    }

    this.hostRef.instance.inject(compRef);
    this.document.body.appendChild(this.hostRef.location.nativeElement);
    this.appRef.attachView(this.hostRef.hostView);

    return compRef;
  }

  close() {
    if (this.hostRef) {
      this.appRef.detachView(this.hostRef.hostView);
      this.hostRef.destroy();
      this.hostRef = undefined;
    }
  }
}
