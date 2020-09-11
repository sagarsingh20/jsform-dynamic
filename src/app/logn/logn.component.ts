import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-logn',
  templateUrl: './logn.component.html',
  styleUrls: ['./logn.component.scss']
})
export class LognComponent implements OnInit {
  checkForm: FormGroup
  constructor() { }
  
  ngOnInit() {
    let see={}
    this.formFieldData.forEach(check=>{
      see[check.label]=new FormControl('');
    })
    this.checkForm= new FormGroup(see)
  }

  
formFieldData=[

  {id:"nameField",type:"text", label:"name"},
  {id:"nameField1",type:"checkbox",label:"check"},
  {id:"nameField2",type:"select",label:"select",options:[
    {text:"option1",value:1},
    {text:"option2",value:2}
  ]},
  {id:"nameField3",type:"text", label:"fname"},
  {id:"nameField4",type:"text", label:"sname"},
  {id:"nameField5",type:"text", label:"tname"}
]

onSubmit(){
  console.log(this.checkForm.value)
}

}
