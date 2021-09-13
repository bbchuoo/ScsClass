import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  str
  str1;
  fileToUpload: File = null;
  file: any;
  bb = [];
  cc = [];
  dd = []
  ee = []
  yyy = [];
  res;
  title = 'alvinTest';
  showC = false;

  constnt = [];
  click() {
    this.showC = !this.showC;
  }

  ngOnInit(): void {

    // this.test()
  }

  mergeRes(res?) {
    this.res = res;
    this.bb = [];
    this.cc = [];
    this.dd = [];
    this.ee = [];
    this.yyy = [];

    console.log('this.str =', this.str);

    var arr = this.str.split('\n');

    console.log('this.str =', this.str);

    console.log('arr=', arr)

    const newArr = [];
    arr.forEach(element => {

      const str = element.replace(/\s+/g, ' ');
      const aa = str.split(" ");
      console.log('aa=', aa)
      if (aa.length === 3 && aa[1] !== 'Object') {
        this.bb.push(aa[0]);
        this.cc.push(aa[2]);
      }
      if (aa.length === 3 && aa[1] === 'Object') {
        this.bb.push(aa[0] + '物件');
        this.cc.push(aa[2] + '物件');
      }
      if (aa.length === 4) {
        this.bb.push(aa[0] + '轉物件');
        this.cc.push(aa[3] + '轉物件');
      }
      console.log('aa=', aa)
    });

    console.log('this.bb=', this.bb)
    console.log('this.cc=', this.cc)

    this.bb.forEach((st: string) => {
      if (st.indexOf('轉物件') > -1 && res) {
        const stt = st.replace('轉物件', '');
        this.dd.push(stt + `:${stt[0].toUpperCase() + stt.slice(1)}[];<br/>`);
      } else if (st.indexOf('轉物件') > -1 && !res) {
        const stt = st.replace('轉物件', '');
        this.dd.push(stt + `:${stt[0].toUpperCase() + stt.slice(1)}[] = [];<br/>`);
      } else if (st.indexOf('物件') > -1 && res) {
        const stt = st.replace('物件', '');
        this.dd.push(stt + `:${stt[0].toUpperCase() + stt.slice(1)};<br/>`);
      } else if (st.indexOf('物件') > -1 && !res) {
        const stt = st.replace('物件', '');
        this.dd.push(stt + ` = new ${stt[0].toUpperCase() + stt.slice(1)}();<br/>`);
      } else if (res) {
        this.dd.push(st + ':string;<br/>');
      } else {
        this.dd.push(st + ' = \'\';<br/>');
      }
    });


    this.cc.forEach((st) => {
      console.log('st', st)
      console.log('st.indexOf(轉物件)=', st.indexOf('轉物件'))
      if (st.indexOf('轉物件') > -1) {
        const stt = st.replace('轉物件', '');
        console.log('stt=', stt)
        this.ee.push('/** ' + stt + ' */' + '<br/>');
      } else if (st.indexOf('物件') > -1) {
        const stt = st.replace('物件', '');
        console.log('stt=', stt)
        this.ee.push('/** ' + stt + ' */' + '<br/>');
      } else {
        this.ee.push('/** ' + st + ' */' + '<br/>');
      }
    });


    console.log('this.dd=', this.dd)
    console.log('this.ee=', this.ee)


    this.ee.forEach((eee, index) => {
      this.yyy.push(eee);
      this.yyy.push(this.dd[index]);
    });

    console.log('this.yyy=', this.yyy)

  }

}
