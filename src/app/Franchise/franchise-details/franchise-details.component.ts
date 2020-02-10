import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-franchise-details',
  templateUrl: './franchise-details.component.html',
  styleUrls: ['./franchise-details.component.css']
})
export class FranchiseDetailsComponent implements OnInit {

  tabIndex = 0;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const preBtn = <HTMLElement>document.getElementById('preBtn');
    const moveTab = <HTMLElement>document.querySelector('.move-tab');
    preBtn.style.visibility = 'hidden';
    // to ensure moveTab can stay correct position
    $(window).resize(() => {
      const screenWidth = document.body.clientWidth;
      if (screenWidth > 990) {
        moveTab.style.width = 'calc((100% - 260px) / 2)';
        if (this.tabIndex === 1) {
          moveTab.style.left = '20vw';
        } else if (this.tabIndex === 2) {
          moveTab.style.left = '42vw';
        }
      } else {
        moveTab.style.width = '34%';
        if (this.tabIndex === 1) {
          moveTab.style.left = '30vw';
        } else if (this.tabIndex === 2) {
          moveTab.style.left = '61.5vw';
        }
      }
    });

    const tabs = document.getElementsByClassName('userDetails-tab');
    for (let i = 1; i < tabs.length; i++) {
      (<HTMLElement>tabs[i]).style.display = 'none';
    }
  }

  preOnClick() {
    const moveTab = <HTMLElement>document.querySelector('.move-tab');
    const nextBtn = <HTMLElement>document.getElementById('nextBtn');
    const preBtn = <HTMLElement>document.getElementById('preBtn');
    const tabs = document.getElementsByClassName('userDetails-tab');
    const screenWidth = document.body.clientWidth;
    for (let i = 0; i < tabs.length; i++) {
      (<HTMLElement>tabs[i]).style.display = 'none';
    }
    if (this.tabIndex === 2) {
      this.tabIndex--;
      moveTab.style.left = screenWidth > 990 ? '20vw' : '30vw';
      nextBtn.style.visibility = 'visible';
      moveTab.innerHTML = 'Account Details';
    }else if (this.tabIndex === 1) {
      this.tabIndex--;
      moveTab.style.left = '-1vw';
      preBtn.style.visibility = 'hidden';
      moveTab.innerHTML = 'Address Details';
    }
    (<HTMLElement>tabs[this.tabIndex]).style.display = 'inherit';
  }

  nextOnClick() {
    const moveTab = <HTMLElement>document.querySelector('.move-tab');
    const nextBtn = <HTMLElement>document.getElementById('nextBtn');
    const preBtn = <HTMLElement>document.getElementById('preBtn');
    const tabs = document.getElementsByClassName('userDetails-tab');
    const screenWidth = document.body.clientWidth;
    for (let i = 0; i < tabs.length; i++) {
      (<HTMLElement>tabs[i]).style.display = 'none';
    }
    if (this.tabIndex === 0) {
      this.tabIndex++;
      moveTab.style.left = screenWidth > 990 ? '20vw' : '30vw';
      preBtn.style.visibility = 'visible';
      moveTab.innerHTML = 'Account Details';
    }else if (this.tabIndex === 1) {
      this.tabIndex++;
      moveTab.style.left = screenWidth > 990 ? '42vw' : '61.5vw';
      nextBtn.style.visibility = 'hidden';
      moveTab.innerHTML = 'Company Details';
    }
    (<HTMLElement>tabs[this.tabIndex]).style.display = 'inherit';
  }

}
