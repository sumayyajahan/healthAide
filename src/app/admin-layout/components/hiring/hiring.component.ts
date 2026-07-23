import { Component } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = `./assets/pdf.worker.min.js`;

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.css']
})
export class HiringComponent {

  async onPdfUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    const arrayBuffer = await file.arrayBuffer();

    // FIX #1 — pdf.js requires { data: ArrayBuffer }
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 1.5 });

    const canvas = document.getElementById('pdfCanvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d')!;

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // FIX #2 — pdf.js requires canvas property
    await page.render({
      canvasContext: context,
      viewport,
      canvas
    }).promise;
  }
}
