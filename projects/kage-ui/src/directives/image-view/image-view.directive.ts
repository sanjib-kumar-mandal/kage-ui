import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';
import { KageToastCtrl } from '../../services/toast/toast.service';

@Directive({
  selector: '[kageImageView]',
})
export class KageImageViewDirective implements AfterViewInit {
  private element = inject(ElementRef);
  private document = inject(DOCUMENT);
  private toastService = inject(KageToastCtrl);

  ngAfterViewInit(): void {
    const ele = this.element.nativeElement;
    ele.style.cursor = 'pointer';
    ele.onclick = () => this.previewImage(ele.src, ele.alt);
  }

  private previewImage(imageUrl: string, imageAlt?: string) {
    const urlConfig = new URL(this.document.URL);

    const container = this.document.createElement('div');
    container.setAttribute('class', 'kage-image-preview-container');

    const loaderContainer = this.document.createElement('div');
    loaderContainer.setAttribute('class', 'kage-image-preview-loader');
    const spanOne = this.document.createElement('span');
    loaderContainer.append(spanOne);
    const spanTwo = this.document.createElement('span');
    loaderContainer.append(spanTwo);
    const spanThree = this.document.createElement('span');
    loaderContainer.append(spanThree);
    const spanFour = this.document.createElement('span');
    loaderContainer.append(spanFour);
    const spanFive = this.document.createElement('span');
    loaderContainer.append(spanFive);
    container.appendChild(loaderContainer);

    const image = this.document.createElement('img');
    image.src = imageUrl;
    image.alt = imageAlt ?? 'image';
    image.title = imageAlt ?? 'Image';
    image.loading = 'lazy';
    image.style.display = 'none';
    image.onload = () => {
      container.removeChild(loaderContainer);
      image.style.display = 'inherit';
      image.setAttribute('class', 'kage-image-preview-image-loaded');
    };
    container.appendChild(image);

    const options = this.document.createElement('div');
    options.setAttribute('class', 'kage-image-preview-options');
    const optionsDownload = this.document.createElement('div');
    // Need to provide icon url
    optionsDownload.setAttribute('class', 'kage-image-preview-option-download');
    optionsDownload.innerText = 'Download';
    optionsDownload.addEventListener('click', () => {
      if (imageUrl) {
        if (imageUrl.startsWith('/')) {
          this.downloadImage(`${urlConfig.origin}${imageUrl}`, imageAlt);
        } else if (
          imageUrl.startsWith('http://') ||
          imageUrl.startsWith('https://')
        ) {
          this.downloadImage(imageUrl, imageAlt);
        }
      }
    });
    options.appendChild(optionsDownload);

    const optionsClose = this.document.createElement('div');
    // Need to provide icon url
    optionsClose.setAttribute('class', 'kage-image-preview-option-close');
    optionsClose.innerText = 'Close';
    optionsClose.addEventListener('click', () =>
      this.document.body.removeChild(container)
    );
    options.appendChild(optionsClose);

    container.appendChild(options);

    this.document.body.appendChild(container);
  }

  private async downloadImage(src: string, fileName?: string) {
    if (src) {
      const response = await fetch(src);
      const blobImage = await response.blob();

      const href = URL.createObjectURL(blobImage);

      const anchorElement = this.document.createElement('a');
      anchorElement.href = href;
      anchorElement.download = `${cleanText(fileName ?? 'Image')}.${
        getFileExtensionFromUrl(src) ?? 'png'
      }`;
      this.document.body.appendChild(anchorElement);

      anchorElement.click();

      this.document.body.removeChild(anchorElement);
      URL.revokeObjectURL(href);
    } else {
      this.toastService.show({
        message: "Couldn't download image.",
        position: 'top-right',
        duration: 2500,
        type: 'danger',
      });
    }
  }
}
export const getFileExtensionFromUrl = (url: string): string | null => {
  if (url) {
    if (typeof url === 'string') {
      return url.split('.').pop() ?? null;
    }
  }
  return null;
};

export const cleanText = (name: string): string | null => {
  if (name && typeof name === 'string') {
    return name
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll('-', '_')
      .replaceAll('/', '_');
  }
  return null;
};
