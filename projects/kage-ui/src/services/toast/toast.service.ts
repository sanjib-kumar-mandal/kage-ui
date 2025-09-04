import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  inject,
  Injectable,
  Injector,
  DOCUMENT
} from '@angular/core';
import { KageToastOptions, KageToastPosition } from './toast.model';
import { KageToastHost } from './toast.component';


@Injectable({
  providedIn: 'root',
})
export class KageToastCtrl {
  private wrappers: Map<KageToastPosition, HTMLElement> = new Map();

  private appRef = inject(ApplicationRef);
  private injector = inject(Injector);
  private envInjector = inject(EnvironmentInjector);
  private document = inject(DOCUMENT);

  show(options: KageToastOptions) {
    const {
      message,
      type = 'info',
      duration = 3000,
      position = 'top-right',
    } = options;

    const wrapper = this.ensureWrapper(position);

    const componentRef = createComponent(KageToastHost, {
      environmentInjector: this.envInjector,
      elementInjector: this.injector,
    });

    componentRef.setInput('message', message);
    componentRef.setInput('type', type);

    componentRef.instance.dismiss.subscribe(() => {
      this.removeToast(wrapper, componentRef);
    });

    this.appRef.attachView(componentRef.hostView);
    wrapper.appendChild(componentRef.location.nativeElement);

    if (duration > 0) {
      setTimeout(() => this.removeToast(wrapper, componentRef), duration);
    }
  }

  private removeToast(
    wrapper: HTMLElement,
    componentRef: ComponentRef<KageToastHost>
  ) {
    this.appRef.detachView(componentRef.hostView);
    componentRef.destroy();
    if (wrapper.children.length === 0) {
      wrapper.remove();
      this.wrappers.forEach((el, key) => {
        if (el === wrapper) this.wrappers.delete(key);
      });
    }
  }

  private ensureWrapper(position: KageToastPosition): HTMLElement {
    if (this.wrappers.has(position)) {
      return this.wrappers.get(position)!;
    }

    const wrapper = this.document.createElement('div');
    wrapper.classList.add('k-toast-wrapper', position);
    this.document.body.appendChild(wrapper);
    this.wrappers.set(position, wrapper);
    return wrapper;
  }

  clearAll() {
    this.wrappers.forEach((wrapper) => {
      while (wrapper.firstChild) {
        wrapper.firstChild.remove();
      }
      wrapper.remove();
    });
    this.wrappers.clear();
  }
}
