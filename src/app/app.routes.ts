import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@page/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'introduction',
    loadComponent: () =>
      import('@page/introduction/introduction.component').then(
        (m) => m.IntroductionComponent
      ),
  },
  {
    path: 'library',
    loadComponent: () =>
      import('@page/librery/components.component').then(
        (m) => m.ComponentsComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@page/librery/all/all.component').then((m) => m.AllComponent),
      },
      {
        path: 'avatar',
        loadComponent: () =>
          import(
            '@page/librery/components/avatar-preview/avatar-preview.component'
          ).then((m) => m.AvatarPreviewComponent),
      },
      {
        path: 'accordion',
        loadComponent: () =>
          import(
            '@page/librery/components/accordion-preview/accordion-preview.component'
          ).then((m) => m.AccordionPreviewComponent),
      },
      {
        path: 'badge',
        loadComponent: () =>
          import(
            '@page/librery/components/badge-preview/badge-preview.component'
          ).then((m) => m.BadgePreviewComponent),
      },
      {
        path: 'bread-crumb',
        loadComponent: () =>
          import(
            '@page/librery/components/bread-crumbs-preview/bread-crumbs-preview.component'
          ).then((m) => m.BreadCrumbsPreviewComponent),
      },
      {
        path: 'button',
        loadComponent: () =>
          import(
            '@page/librery/components/button-preview/button-preview.component'
          ).then((m) => m.ButtonPreviewComponent),
      },
      {
        path: 'calendar',
        loadComponent: () =>
          import(
            '@page/librery/components/calendar-preview/calendar-preview.component'
          ).then((m) => m.CalendarPreviewComponent),
      },
      {
        path: 'card',
        loadComponent: () =>
          import(
            '@page/librery/components/card-preview/card-preview.component'
          ).then((m) => m.CardPreviewComponent),
      },
      {
        path: 'checkbox',
        loadComponent: () =>
          import(
            '@page/librery/components/checkbox-preview/checkbox-preview.component'
          ).then((m) => m.CheckboxPreviewComponent),
      },
      {
        path: 'chip',
        loadComponent: () =>
          import(
            '@page/librery/components/chip-preview/chip-preview.component'
          ).then((m) => m.ChipPreviewComponent),
      },
      {
        path: 'drawer',
        loadComponent: () =>
          import(
            '@page/librery/services/drawer-preview/drawer-preview.component'
          ).then((m) => m.DrawerPreviewComponent),
      },
      {
        path: 'fab',
        loadComponent: () =>
          import(
            '@page/librery/components/fab-preview/fab-preview.component'
          ).then((m) => m.FabPreviewComponent),
      },
      {
        path: 'grid',
        loadComponent: () =>
          import(
            '@page/librery/components/grid-preview/grid-preview.component'
          ).then((m) => m.GridPreviewComponent),
      },
      {
        path: 'icon',
        loadComponent: () =>
          import(
            '@page/librery/components/icon-preview/icon-preview.component'
          ).then((m) => m.IconPreviewComponent),
      },
      {
        path: 'input',
        loadComponent: () =>
          import(
            '@page/librery/components/input-peview/input-peview.component'
          ).then((m) => m.InputPeviewComponent),
      },
      {
        path: 'progress-bar',
        loadComponent: () =>
          import(
            '@page/librery/components/progress-bar-preview/progress-bar-preview.component'
          ).then((m) => m.ProgressBarPreviewComponent),
      },
      {
        path: 'radio',
        loadComponent: () =>
          import(
            '@page/librery/components/radio-preview/radio-preview.component'
          ).then((m) => m.RadioPreviewComponent),
      },
      {
        path: 'range',
        loadComponent: () =>
          import(
            '@page/librery/components/range-preview/range-preview.component'
          ).then((m) => m.RangePreviewComponent),
      },
      {
        path: 'searchbar',
        loadComponent: () =>
          import(
            '@page/librery/components/searchbar-preview/searchbar-preview.component'
          ).then((m) => m.SearchbarPreviewComponent),
      },
      {
        path: 'segment',
        loadComponent: () =>
          import(
            '@page/librery/components/segment-preview/segment-preview.component'
          ).then((m) => m.SegmentPreviewComponent),
      },
      {
        path: 'select',
        loadComponent: () =>
          import(
            '@page/librery/components/select-preview/select-preview.component'
          ).then((m) => m.SelectPreviewComponent),
      },
      {
        path: 'textarea',
        loadComponent: () =>
          import(
            '@page/librery/components/textarea-preview/textarea-preview.component'
          ).then((m) => m.TextareaPreviewComponent),
      },
      {
        path: 'toggle',
        loadComponent: () =>
          import(
            '@page/librery/components/toggle-preview/toggle-preview.component'
          ).then((m) => m.TogglePreviewComponent),
      },
      {
        path: 'alert',
        loadComponent: () =>
          import(
            '@page/librery/services/alert-preview/alert-preview.component'
          ).then((m) => m.AlertPreviewComponent),
      },
      {
        path: 'modal',
        loadComponent: () =>
          import(
            '@page/librery/services/modal-preview/modal-preview.component'
          ).then((m) => m.ModalPreviewComponent),
      },
      {
        path: 'toast',
        loadComponent: () =>
          import(
            '@page/librery/services/toast-preview/toast-preview.component'
          ).then((m) => m.ToastPreviewComponent),
      },
      {
        path: 'popover',
        loadComponent: () =>
          import(
            '@page/librery/services/popover-preview/popover-preview.component'
          ).then((m) => m.PopoverPreviewComponent),
      },
      {
        path: 'image-view',
        loadComponent: () =>
          import(
            '@page/librery/directives/image-view-directive-preview/image-view-directive-preview.component'
          ).then((m) => m.ImageViewDirectivePreviewComponent),
      },
      {
        path: 'ripple',
        loadComponent: () =>
          import(
            '@page/librery/directives/ripple-directive-preview/ripple-directive-preview.component'
          ).then((m) => m.RippleDirectivePreviewComponent),
      },
      {
        path: 'copy',
        loadComponent: () =>
          import(
            '@page/librery/directives/copy-preview/copy-preview.component'
          ).then((m) => m.CopyPreviewComponent),
      },
      {
        path: 'image-fallback',
        loadComponent: () =>
          import(
            '@page/librery/directives/image-fallback/image-fallback.component'
          ).then((m) => m.ImageFallbackComponent),
      },
      {
        path: 'resize',
        loadComponent: () =>
          import(
            '@page/librery/directives/resize-directive-preview/resize-directive-preview.component'
          ).then((m) => m.ResizeDirectivePreviewComponent),
      },
      {
        path: 'bytes',
        loadComponent: () =>
          import(
            '@page/librery/pipes/bytes-preview/bytes-preview.component'
          ).then((m) => m.BytesPreviewComponent),
      },
      {
        path: 'capitalize',
        loadComponent: () =>
          import(
            '@page/librery/pipes/capitalize-preview/capitalize-preview.component'
          ).then((m) => m.CapitalizePreviewComponent),
      },
      {
        path: 'mask',
        loadComponent: () =>
          import(
            '@page/librery/pipes/mask-preview/mask-preview.component'
          ).then((m) => m.MaskPreviewComponent),
      },
      {
        path: 'ordinate',
        loadComponent: () =>
          import(
            '@page/librery/pipes/ordinate-preview/ordinate-preview.component'
          ).then((m) => m.OrdinatePreviewComponent),
      },
      {
        path: 'repeat',
        loadComponent: () =>
          import(
            '@page/librery/pipes/repeat-preview/repeat-preview.component'
          ).then((m) => m.RepeatPreviewComponent),
      },
      {
        path: 'truncate',
        loadComponent: () =>
          import(
            '@page/librery/pipes/truncate-preview/truncate-preview.component'
          ).then((m) => m.TruncatePreviewComponent),
      },
      {
        path: 'highlight',
        loadComponent: () =>
          import(
            '@page/librery/pipes/highlight-preview/highlight-preview.component'
          ).then((m) => m.HighlightPreviewComponent),
      },
      {
        path: 'slugify',
        loadComponent: () =>
          import(
            '@page/librery/pipes/slugify-preview/slugify-preview.component'
          ).then((m) => m.SlugifyPreviewComponent),
      },
      {
        path: 'time-ago',
        loadComponent: () =>
          import(
            '@page/librery/pipes/time-ago-preview/time-ago-preview.component'
          ).then((m) => m.TimeAgoPreviewComponent),
      },
    ],
  },
  {
    path: 'icons',
    loadComponent: () =>
      import('@page/icons/icons.component').then((m) => m.IconsComponent),
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('@page/privacy/privacy.component').then((m) => m.PrivacyComponent),
  },
];
