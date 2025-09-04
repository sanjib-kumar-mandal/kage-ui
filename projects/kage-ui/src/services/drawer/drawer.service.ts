import {
  Injectable,
  TemplateRef,
  ComponentRef,
  Type,
  EnvironmentInjector,
  inject,
  Injector,
  createComponent,
  ApplicationRef,
  DOCUMENT
} from '@angular/core';
import { KageDrawerHost } from './drawer.component';


@Injectable({
  providedIn: 'root',
})
export class KageDrawerCtrl {
  private stack: ComponentRef<KageDrawerHost>[] = [];
  private envInjector = inject(EnvironmentInjector);
  private injector = inject(Injector);
  private appRef = inject(ApplicationRef);
  private document = inject(DOCUMENT);

  openFromTemplate(
    content: TemplateRef<any>,
    config?: { position?: 'left' | 'right'; width?: string }
  ) {
    this.createDrawer(content, undefined, config);
  }

  openFromComponent<T>(
    component: Type<T>,
    config?: {
      position?: 'left' | 'right';
      width?: string;
      inputs?: Record<string, any>;
      outputs?: Record<string, (...args: any[]) => void>;
    }
  ) {
    this.createDrawer(undefined, { component, config });
  }

  close() {
    const ref = this.stack.pop();
    if (this.stack.length === 0) {
      this.document.body.classList.remove('drawer-open');
    }
    ref?.destroy();
  }

  closeAll() {
    this.stack.forEach((ref) => ref.destroy());
    this.stack = [];
    this.document.body.classList.remove('drawer-open');
  }

  private createDrawer(
    tpl?: TemplateRef<any>,
    dynamicComponent?: {
      component: Type<any>;
      config?: {
        position?: 'left' | 'right';
        width?: string;
        inputs?: Record<string, any>;
        outputs?: Record<string, (...args: any[]) => void>;
      };
    },
    templateConfig?: { position?: 'left' | 'right'; width?: string }
  ) {
    const cmpRef = createComponent(KageDrawerHost, {
      environmentInjector: this.envInjector,
      elementInjector: this.injector,
    });

    cmpRef.location.nativeElement.style.position = 'fixed';
    cmpRef.location.nativeElement.style.inset = '0';
    cmpRef.location.nativeElement.style.zIndex = `${
      1100 + this.stack.length * 10
    }`;
    this.document.body.appendChild(cmpRef.location.nativeElement);
    this.appRef.attachView(cmpRef.hostView);

    const instance = cmpRef.instance;

    if (tpl) {
      instance.content = tpl;
      instance.mode = 'template';
      instance.position = templateConfig?.position ?? 'left';
      instance.width = templateConfig?.width ?? '300px';
    } else if (dynamicComponent) {
      const { component, config } = dynamicComponent;
      instance.dynamicComponentType = component;
      instance.mode = 'component';
      instance.position = config?.position ?? 'left';
      instance.width = config?.width ?? '300px';
      instance.dynamicInputs = config?.inputs ?? {};
      instance.dynamicOutputs = config?.outputs ?? {};
    }

    instance.closed.subscribe(() => this.close());
    this.stack.push(cmpRef);
    this.document.body.classList.add('drawer-open');
  }
}
