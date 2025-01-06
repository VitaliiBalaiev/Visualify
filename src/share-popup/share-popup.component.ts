import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'share-popup',
  imports: [],
  templateUrl: './share-popup.component.html',
  standalone: true,
  styleUrl: './share-popup.component.css'
})
export class SharePopupComponent {
  @Input() trackName!: string;
  @Input() trackImg!: string;
  @Input() trackArtists!: string;
  @Input() shareLink!: string;
  
  @Output() close = new EventEmitter<void>();
  
  isCopied: boolean = false;

  copyLink(link: string): void {
    navigator.clipboard.writeText(link).then(() => {
      this.isCopied = true;
      setTimeout(() => (this.isCopied = false), 2500);
    });
  }

  closeModal() {
    this.close.emit();
  }
  
  

}
