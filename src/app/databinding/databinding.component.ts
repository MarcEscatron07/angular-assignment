import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  username: string = '';
  isButtonDisabled: boolean = true;
  // DATABINDING VARIABLES
  isDisplayClicked: boolean = false;
  clickCnt: number = 0;
  actionLogs: any[] = [];
  // 

  constructor() {
  }

  ngOnInit(): void {
  }

  onTypingUsername = (e: any) => {
    console.log('onTypingUsername event', e)
    this.username = e.target.value;
    if(e.target.value !== '' && e.target.value.trim() !== ''){
      this.isButtonDisabled = false;
    } else {
      this.isButtonDisabled = true;
    }
  }

  onResetUsername = () => {
    return this.username = '';
  }

  // DATABINDING METHODS
  onDisplayDetailsClick = () => {
    if(this.isDisplayClicked){
      this.isDisplayClicked = false;
    } else {
      this.isDisplayClicked = true;
    }
    this.clickCnt++;
    // this.actionLogs.push(this.clickCnt) // using Integers
    this.actionLogs.push(new Date()) // using a timestamp
  }
  // 
}
