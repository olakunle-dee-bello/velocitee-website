import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  pageData = {
    product_summary: `We’re a technology company building cross-border technology solutions allowing Africans to access global goods and services`,
    adsift_summary: `We’re a technology company building cross-border technology solutions allowing Africans to access global  goods and services.`,
    carligy_summary: `We’re a technology company building cross-border technology solutions allowing Africans to access global  goods and services.`,
    leadTitle: `Pushing the boundaries of growth on human potential`,
    leadContent: `Pushing the boundaries of growth on human potential Pushing the boundaries of growth on Pushing the boundaries of growth on human potential Pushing the boundaries of growth on`,
    section2_header: `Seamless Automated Feedback`,
    section2_content: `Gather quality feedback on campaigns from responders in and make data supported/backed decisons`,
    section3_header: `Your career elevation partner`,
    section3_content: `Gather quality feedback on campaigns from responders in and make data supported/backed decisons`,
    section4_header: `Join a growing alliance of social enterprise practitioners.`,
    section4_content: `Join a growing alliance of social enterprise practitioners and ecosystem supporters,  Join a growing alliance of social enterprise practitioners and ecosystem supporters, `,
    section5_header: `Join a growing alliance of social enterprise practitioners. `,
    sect5_content: [`Join a growing alliance of social enterprise practitioners and ecosystem supporters`,`Join a growing alliance of social enterprise practitioners and ecosystem supporters`,`Join a growing alliance of social enterprise practitioners and ecosystem supporters`,`Join a growing alliance of social enterprise practitioners and ecosystem supporters`,`Join a growing alliance of social enterprise practitioners and ecosystem supporters`],
    faq: [{
      question: `We are available during this time to attend to all customer issues from delivery to order tracking etc`,
      isOpen: false,
      content: `This is additional content displayed after clicking on the caret. More here and so on
      blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
      blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah`
    },{
      question: `We are available during this time to attend to all customer issues from delivery to order tracking etc`,
      isOpen: false,
      content: `This is additional content displayed after clicking on the caret. More here and so on
      blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
      blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah`
    },{
      question: `We are available during this time to attend to all customer issues from delivery to order tracking etc`,
      isOpen: false,
      content: `This is additional content displayed after clicking on the caret. More here and so on
      blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
      blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah`
    },{
      question: `We are available during this time to attend to all customer issues from delivery to order tracking etc`,
      isOpen: false,
      content: `This is additional content displayed after clicking on the caret. More here and so on
      blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
      blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah`
    },{
      question: `We are available during this time to attend to all customer issues from delivery to order tracking etc`,
      isOpen: false,
      content: `This is additional content displayed after clicking on the caret. More here and so on
      blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
      blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah`
    },{
      question: `We are available during this time to attend to all customer issues from delivery to order tracking etc`,
      isOpen: false,
      content: `This is additional content displayed after clicking on the caret. More here and so on
      blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
      blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah`
    }]

  }
  ngOnInit(): void {
  }

  onProducts = false;
  getIntouch() {

  }

}
