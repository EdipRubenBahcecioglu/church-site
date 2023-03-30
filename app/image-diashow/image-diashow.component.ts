import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-diashow',
  templateUrl: './image-diashow.component.html',
  styleUrls: ['./image-diashow.component.scss']
})
export class ImageDiashowComponent implements OnInit {

  slideshowImages = ['slide_0.png', 'slide_1.png', 'slide_2.png', 'slide_3.png', 'slide_4.png', 'slide_5.png', 'slide_6.png', 'slide_7.png', 'slide_8.png'];
  slideshowText = [
  'Seid allezeit fröhlich, betet ohne Unterlass, seid dankbar in allen Dingen; denn das ist der Wille Gottes in Christus Jesus für euch.',
  'Darum sage ich euch: Alles, was ihr betet und bittet, glaubt nur, dass ihrs empfangt, so wirds euch zuteilwerden.', 
  'Alles, was für unser Leben und unsere Frömmigkeit gut ist, hat seine göttliche Macht uns geschenkt.',
  'Alles, was ihr tut, das tut von Herzen als dem Herrn und nicht den Menschen, denn ihr wisst, dass ihr von dem Herrn als Lohn das Erbe empfangen werdet. Dient dem Herrn Christus!',
  'Aber dem HERRN, eurem Gott, sollt ihr dienen, so wird er dein Brot und dein Wasser segnen, und ich will alle Krankheit von dir wenden.', 
  'Der HERR aber, der selber vor euch hergeht, der wird mit dir sein und wird die Hand nicht abtun und dich nicht verlassen. Fürchte dich nicht und erschrick nicht!', 
  'Jesus spricht zu ihr: Ich bin die Auferstehung und das Leben. Wer an mich glaubt, der wird leben, ob er gleich stürbe; und wer da lebt und glaubt an mich, der wird nimmermehr sterben.', 
  'Jesus aber sprach zu ihm: Du sagst: Wenn du kannst! Alle Dinge sind möglich dem, der da glaubt.', 
  'Dies habe ich mit euch geredet, damit ihr in mir Frieden habt. In der Welt habt ihr Angst; aber seid getrost, ich habe die Welt überwunden.'
];
  currentImage = 0;
  playAnimation = true;

  ngOnInit(){
    this.startDiashow();
  }

  startDiashow(){
    setInterval(()=>{
      this.currentImage++;
      this.currentImage = this.currentImage % this.slideshowImages.length;
      this.playAnimation = false;

      setTimeout(()=>{
        this.playAnimation = true;
      }, 100);

    }, 9000);
  }
}
