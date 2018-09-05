 
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, OnDestroy, HostListener, ElementRef } from '@angular/core';

declare const $: any;


@Component({
    selector: 'app-presentation',
    templateUrl: './presentation.component.html',
    styleUrls: ['./presentation.component.scss']
})

export class PresentationComponent implements OnInit, OnDestroy {
    model = {
        left: true,
        middle: false,
        right: false
    };
    closeResult: string;

    date: Date = new Date();

     constructor(public el: ElementRef, private modalService: NgbModal) { }

     open(content, type) {
        if (type === 'sm') {
            console.log('aici');
            this.modalService.open(content, { size: 'sm' }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        } else {
            this.modalService.open(content).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
     @HostListener('window:scroll', ['$event'])
     checkScroll() {
        const componentPosition = document.getElementsByClassName('add-animation');
        const scrollPosition = window.pageYOffset; 
        for(var i = 0; i < componentPosition.length; i++) {
            var rec = componentPosition[i].getBoundingClientRect().top + window.scrollY + 100;
            if ( scrollPosition + window.innerHeight >= rec ) {
                componentPosition[i].classList.add('animated');
            } else if ( scrollPosition + window.innerHeight * 0.8 < rec ) {
                componentPosition[i].classList.remove('animated');
            }
        }
     }
    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('presentation-page');
        body.classList.add('loading');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('presentation-page');
        body.classList.remove('loading');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }
}
