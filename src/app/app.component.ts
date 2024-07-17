import {Component, OnInit} from '@angular/core';
import {parseJson} from "@angular/cli/src/utilities/json-file";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{



  sendDataIframe(){

    const iframe = (document.getElementById('myIframeLiveness') as HTMLIFrameElement).contentWindow;
    let data = {
      applicationId :128,
      //activo 152
      //pasivo 153
      flowId:153,
      // userId:'0',
      // email:'',
      // idType:'',
      // idNumber:'',
      // idAliado:'',
      // updateField:''
    }
    iframe?.postMessage(JSON.stringify(data),
    'https://spagos-ang-livenessactivo-nop.sistecreditocloud.com'
  );
  }

  ngOnInit(): void {
    window.addEventListener('message', (event) => {
      if(event.origin === 'https://spagos-ang-livenessactivo-nop.sistecreditocloud.com' &&  event.data){
        console.log('maruloEvent', JSON.parse(event.data));
      }

    });
  }
}
