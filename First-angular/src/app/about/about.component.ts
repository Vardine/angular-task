import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = "About Us";
  contentAbout = "About us Iguan Systems offers a big variety of software and web development programs to European and American companies to create and develop their businesses. We create our own programs which are exported to other developed countries in all over the world. Our main office is located in Yerevan, Armenia. Our company has already found its own place in the market of Western Europe and the USA. As a result of the long time experience, our company helps our customers succeed in the best use of informative technologies. We use the most advanced software platforms for our clients, web and mobile development. Within the years Iguan Systems has developed its programs and technological opportunities and, as a fact, today we offer software, web and mobile programs in a high quality in a very short period of time, which are easy to use and which give a successful start to any business. One of the main principles of our company is to build a trustworthy relationship with our customers, thus, each project is created by group of experienced designers and programmers.";
  constructor() { }

  ngOnInit() {
  }


}
