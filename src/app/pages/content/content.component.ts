import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../components/data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string="";
  @Input()
  contentTitle:string="";
  @Input()
  contentDescription:string="";
  private id:string="0";
  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get('id') || "0"
    )
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string){
    const result = dataFake.filter(
      article => article.id == id
    )[0]

      this.photoCover = result.photo;
      this.contentTitle = result.title;
      this.contentDescription = result.description;
   
  }

}
