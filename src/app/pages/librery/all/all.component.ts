import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { KageCard, KageImageFallbackDirective } from 'kage-ui';

@Component({
  selector: 'k-all',
  imports: [KageCard, KageImageFallbackDirective, UpperCasePipe],
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss',
})
export class AllComponent {
  features = [
    {
      title: 'Components',
      description: '',
      childrens: [
        {
          name: 'Avatar',
          description:
            "An avatar description typically refers to a concise written portrayal of a character's visual appearance, personality, and sometimes their backstory or role — often used in games, online profiles, or virtual environments.",
          href: '/library/avatar',
          image: 'assets/features/accordion.png',
        },
        {
          name: 'Accordion',
          description:
            'The Accordion component organizes content into collapsible sections, allowing users to expand and collapse panels as needed. It supports smooth animations and dynamic content loading. Ideal for FAQs, settings panels, or any content that benefits from structured toggling. Custom header and theme compatibility are fully supported.',
          href: '/library/accordion',
          image: 'assets/features/accordion.png',
        },
        {
          name: 'Badge',
          description:
            'The Badge component displays small status indicators or counts, typically used to highlight notifications, messages, or item quantities. Useful for emphasizing dynamic updates or statuses in a clean, compact way.',
          href: '/library/badge',
          image: 'assets/features/badge.png',
        },
        {
          name: 'Bread Crumbs',
          description:
            "The Breadcrumbs component provides a navigational trail that shows the user's current location within a site's hierarchy. It helps users understand the structure of the application and quickly navigate to previous levels. Supports custom separators, links, and dynamic generation from routes.",
          href: '/library/bread-crumb',
          image: 'assets/features/bread-crumbs.png',
        },
        {
          name: 'Button',
          description:
            'The Button component triggers actions or events when clicked. It supports various styles like primary, secondary, and clear, and can be used with icons, loaders, and custom content. Includes support for different sizes, disabled state, and full-width layout.',
          href: '/library/button',
          image: 'assets/features/button.png',
        },
        {
          name: 'Calendar',
          description:
            'The Calendar component lets users view and select dates or ranges in a monthly grid layout.',
          href: '/library/calendar',
          image: 'assets/features/calendar.png',
        },
        {
          name: 'Card',
          description:
            'The Card component is a flexible container used to group related content. It supports customizable sections like header, body, and footer, and can display images, actions, and structured information in a clean, bordered layout.',
          href: '/library/card',
          image: 'assets/features/card.png',
        },
        {
          name: 'Checkbox',
          description:
            'The Checkbox component allows users to select one or multiple options from a set. It supports checked, unchecked, and indeterminate states, and can be easily integrated into forms or standalone selections with customizable styling.',
          href: '/library/checkbox',
          image: 'assets/features/checkbox.png',
        },
        {
          name: 'Chip',
          description:
            'The Chip component represents small blocks of information such as tags, categories, or filters. It supports text and dismiss actions, and can be used interactively or for display-only purposes.',
          href: '/library/chip',
          image: 'assets/features/chip.png',
        },
        {
          name: 'FAB (Floating Action Button)',
          description:
            'The FAB (Floating Action Button) component is a squared button that floats above the UI and represents the primary action on a screen. It include icons for quick interactions.',
          href: '/library/fab',
          image: 'assets/features/fab.png',
        },
        {
          name: 'Grid',
          description:
            'The Grid component provides a flexible layout system based on rows and columns. It helps align content responsively across various screen sizes using customizable spacing, alignment, and breakpoints.',
          href: '/library/grid',
          image: 'assets/features/grid.png',
        },
        {
          name: 'Input',
          description:
            'The Input component offers a customizable form control for capturing user input. It supports various types, states, and enhancements like labels, icons, error messages, and form integrations.',
          href: '/library/input',
          image: 'assets/features/input.png',
        },
        {
          name: 'Progress Bar',
          description:
            'The Progress Bar component visually represents task progress in a linear format. It supports determinate and indeterminate modes, custom colors, and dynamic value updates.',
          href: '/library/progress-bar',
          image: 'assets/features/progress-bar.png',
        },
        {
          name: 'Radio',
          description:
            'The Radio component lets users select a single option from a group. It supports custom styling, disabled states and integration with Angular forms.',
          href: '/library/radio',
          image: 'assets/features/radio.png',
        },
        {
          name: 'Range',
          description:
            'The Range component allows users to select a numeric value or range using a slider. It supports custom steps, min/max values, and two-thumb range selection with responsive design.',
          href: '/library/range',
          image: 'assets/features/range.png',
        },
        {
          name: 'Searchbar',
          description:
            'The Searchbar component provides an input field optimized for search functionality. It includes features like clear button, placeholder, optional icon, and debounced input handling for performance.',
          href: '/library/searchbar',
          image: 'assets/features/searchbar.png',
        },
        {
          name: 'Segment',
          description:
            'Segment is a customer data platform (CDP) that helps you collect, unify, and route user data across your apps and tools. It enables businesses to streamline analytics, marketing, and data infrastructure by providing a single API for all event tracking and customer interactions.',
          href: '/library/segment',
          image: 'assets/features/segment.png',
        },
        {
          name: 'Select',
          description:
            'The Select component provides a customizable dropdown menu allowing users to choose one option. It supports keyboard navigation, dynamic data binding, and full integration with Angular forms using FormControl or ngModel.',
          href: '/library/select',
          image: 'assets/features/select.png',
        },
        {
          name: 'Textarea',
          description:
            'The Textarea component is a flexible, resizable multiline input field designed for capturing longer user input. It supports Angular forms via FormControl or ngModel, and offers features like character counting, floating labels, auto-resizing, error handling, and accessibility support.',
          href: '/library/textarea',
          image: 'assets/features/textarea.png',
        },
        {
          name: 'Toggle',
          description:
            'The Toggle component is an accessible switch-style input used to represent boolean values, such as on/off or true/false states. It supports both FormControl and ngModel, and includes keyboard support, animations, labels, and customizable styling for seamless integration in Angular forms.',
          href: '/library/toggle',
          image: 'assets/features/toggle.png',
        },
      ],
    },
    {
      title: 'Services',
      description: '',
      childrens: [
        {
          name: 'Drawer',
          description:
            'The Drawer Service provides programmatic control over side panels (drawers) that slide in from screen edges. It supports dynamic content injection, customizable width and position, backdrop handling, and lifecycle hooks—ideal for modals, forms, or navigation in Angular apps.',
          href: '/library/drawer',
          image: 'assets/features/drawer.png',
        },
        {
          name: 'Alert',
          description:
            'The Alert Service allows you to trigger configurable alert dialogs such as confirmations, prompts, and custom modals. It supports dynamic content, button actions, input fields, and full lifecycle control, making it ideal for both simple alerts and complex interactions in Angular apps.',
          href: '/library/alert',
          image: 'assets/features/alert.png',
        },
        {
          name: 'Modal',
          description:
            'The Kage-UI Modal Service enables you to open custom modal dialogs with ease. It supports dynamic component or template injection, input/output bindings, lifecycle hooks, and configurable options like size, backdrop, and close behavior—perfect for building interactive workflows in Angular apps.',
          href: '/library/modal',
          image: 'assets/features/modal.png',
        },
        {
          name: 'Toast',
          description:
            'The Kage-UI Toast Service provides a simple way to display non-intrusive, timed notifications. It supports different types (success, error, info, warning), custom duration, positioning, icons, and styling—ideal for user feedback and real-time alerts in Angular applications.',
          href: '/library/toast',
          image: 'assets/features/toast.png',
        },
      ],
    },
    {
      title: 'Directives',
      description: '',
      childrens: [
        {
          name: 'Copy',
          description:
            'The Kage-UI Copy Directive lets you easily copy text or values to the clipboard on user interaction. It supports click and hover triggers, custom feedback messages, and works seamlessly with both static and dynamic content—ideal for enhancing UX in Angular apps.',
          href: '/library/copy',
          image: 'assets/features/copy.png',
        },
        {
          name: 'Image Fallback',
          description:
            'The Kage-UI Image Fallback Directive automatically replaces broken or failed image sources with a fallback image. It ensures graceful degradation, improves UX, and works seamlessly with dynamic src values—ideal for handling unreliable image URLs in Angular apps.',
          href: '/library/image-fallback',
          image: 'assets/features/image-fallback.png',
        },
        {
          name: 'Ripple',
          description:
            "The Kage-UI Ripple Directive adds a material-style ripple animation to elements on interaction, enhancing user feedback. It's lightweight, customizable in color and duration, and works seamlessly with buttons, cards, or any clickable element in Angular applications.",
          href: '/library/ripple',
          image: 'assets/features/ripple.png',
        },
        {
          name: 'Resize',
          description:
            "The Kage-UI Resize Directive detects changes in an element's size and emits events when it resizes. It's useful for responsive layouts, dynamic content adjustments, and integrating with charts or components that depend on container dimensions in Angular apps.",
          href: '/library/resize',
          image: 'assets/features/resize.png',
        },
        {
          name: 'Image View',
          description:
            'The Kage-UI Image Preview Directive enables fullscreen image viewing on click. It detects the src of the target image element and opens it in an overlay with backdrop and close controls—ideal for galleries, thumbnails, or any image needing a zoom-in experience in Angular apps.',
          href: '/library/image-view',
          image: 'assets/features/image-view.png',
        },
      ],
    },
    {
      title: 'Pipes',
      description: '',
      childrens: [
        {
          name: 'Bytes',
          description:
            'The Kage-UI Bytes Pipe formats raw byte values into human-readable file sizes (e.g., 1024 → 1 KB). It supports custom precision and units, making it ideal for displaying file sizes, memory usage, or network data in Angular applications.',
          href: '/library/bytes',
          image: 'assets/features/bytes.png',
        },
        {
          name: 'Capitalize',
          description:
            "The Kage-UI Capitalize Pipe transforms the first letter of a string (or each word) to uppercase. It's perfect for formatting titles, labels, or user-generated content with consistent capitalization in Angular applications.",
          href: '/library/capitalize',
          image: 'assets/features/capitalize.png',
        },
        {
          name: 'Highlight',
          description:
            'The Kage-UI Highlight Pipe highlights matching text within a string based on a search term. It wraps matches with customizable HTML tags or classes, making it ideal for building search result UIs or emphasizing keywords in Angular applications.',
          href: '/library/highlight',
          image: 'assets/features/highlight.png',
        },
        {
          name: 'Mask',
          description:
            'The Kage-UI Mask Pipe formats and masks sensitive or structured data like phone numbers, credit cards, or IDs. It supports custom patterns and placeholder characters, ensuring both privacy and readability in Angular applications.',
          href: '/library/mask',
          image: 'assets/features/mask.png',
        },
        {
          name: 'Ordinate',
          description:
            'The Kage-UI Ordinate Pipe appends the correct ordinal suffix (e.g., 1st, 2nd, 3rd) to a number. It handles special cases like 11th, 12th, and 13th, making it useful for dates, rankings, or positions in Angular applications.',
          href: '/library/ordinate',
          image: 'assets/features/ordinate.png',
        },
        {
          name: 'Repeat',
          description:
            "The Kage-UI Repeat Pipe repeats a given string or character a specified number of times. It's useful for generating placeholders, padding, or creating visual patterns directly within Angular templates.",
          href: '/library/repeat',
          image: 'assets/features/repeat.png',
        },
        {
          name: 'Slugify',
          description:
            "The Kage-UI Slugify Pipe transforms a string into a URL-friendly slug by converting it to lowercase, removing special characters, and replacing spaces with hyphens. It's ideal for generating SEO-friendly URLs, IDs, or anchors in Angular applications.",
          href: '/library/slugify',
          image: 'assets/features/slugify.png',
        },
        {
          name: 'Time Ago',
          description:
            'The Kage-UI Time Ago Pipe converts a date or timestamp into a relative time string (e.g., "5 minutes ago", "2 days ago"). It auto-updates over time and supports localization, making it perfect for timestamps in feeds, comments, or notifications in Angular apps.',
          href: '/library/time-ago',
          image: 'assets/features/time-ago.png',
        },
        {
          name: 'Truncate',
          description:
            "The Kage-UI Truncate Pipe shortens long text to a specified length and appends an ellipsis or custom suffix. It's perfect for displaying concise previews of content like titles, summaries, or messages in Angular applications.",
          href: '/library/truncate',
          image: 'assets/features/truncate.png',
        },
      ],
    },
  ];
}
