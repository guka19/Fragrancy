import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  @ViewChild('pageFeatures') pageFeatures!: ElementRef;
  @ViewChild('pageCategories') pageCategories!: ElementRef;
  @ViewChild('pageSupport') pageSupport!: ElementRef;

  constructor() {}

  scrollToFeatures() {
    this.pageFeatures.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  scrollToCategories() {
    this.pageCategories.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  scrollToSupport() {
    this.pageSupport.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
