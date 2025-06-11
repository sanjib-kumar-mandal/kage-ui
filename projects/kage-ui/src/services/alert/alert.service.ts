import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  inject,
  Injectable,
} from '@angular/core';
import { KageAlertHost } from './alert.component';
import { AlertButton, AlertOptions } from './alert.model';

@Injectable({
  providedIn: 'root',
})
export class KageAlertCtrl {
  private appRef = inject(ApplicationRef);
  private injector = inject(EnvironmentInjector);
  private compRef: ComponentRef<KageAlertHost> | null = null;

  show(
    options: AlertOptions
  ): Promise<{ values: Record<string, string>; button: AlertButton | null }> {
    if (this.compRef) this.close();

    this.compRef = createComponent(KageAlertHost, {
      environmentInjector: this.injector,
    });

    const instance = this.compRef.instance;
    instance.options.set(options);

    const promise = new Promise<any>((resolve: any) => {
      instance.result.subscribe(resolve);
      instance.close.subscribe(() => this.close());
    });

    this.appRef.attachView(this.compRef.hostView);
    const domElem = (this.compRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    if (!options.buttons?.length) {
      setTimeout(() => {
        instance.result.emit({ values: {}, button: null });
        instance.close.emit();
      }, 3000);
    }

    return promise;
  }

  close() {
    if (this.compRef) {
      this.appRef.detachView(this.compRef.hostView);
      this.compRef.destroy();
      this.compRef = null;
    }
  }
}
