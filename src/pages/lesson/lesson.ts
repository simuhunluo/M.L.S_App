import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SearchPage} from "../search/search";
import {ToastController} from 'ionic-angular';

/**
 * Generated class for the LessonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lesson',
  templateUrl: 'lesson.html',
})
export class LessonPage {
  public Json_recommend:Array<any>
  public Json_hot:Array<any>

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    // this.Json_recommend="{" +
    //   "" +
    //   "}";
     this.Json_recommend= [
      { id:1,imgSrc: "./assets/imgs/pic1.jpg", title: "移动端App UI 设计入门与实战", description: "不同于其它只教给你设计技能的课程，本课程将带你从产品的高度实战UI设计，以产品..."},
      { id:2,imgSrc: "./assets/imgs/pic2.jpg", title: "移动端App UI 设计入门与实战", description: "不同于其它只教给你设计技能的课程，本课程将带你从产品的高度实战UI设计，以产品..."},
      { id:3,imgSrc: "./assets/imgs/pic3.jpg", title: "移动端App UI 设计入门与实战", description: "不同于其它只教给你设计技能的课程，本课程将带你从产品的高度实战UI设计，以产品..."},
      { id:4,imgSrc: "./assets/imgs/pic4.jpg", title: "移动端App UI 设计入门与实战", description: "不同于其它只教给你设计技能的课程，本课程将带你从产品的高度实战UI设计，以产品..."}
    ];
    this.Json_hot= [
      { id:1,imgSrc: "./assets/imgs/pic1.jpg", title: "移动端App UI 设计入门与实战", description: "不同于其它只教给你设计技能的课程，本课程将带你从产品的高度实战UI设计，以产品..."},
      { id:2,imgSrc: "./assets/imgs/pic2.jpg", title: "移动端App UI 设计入门与实战", description: "不同于其它只教给你设计技能的课程，本课程将带你从产品的高度实战UI设计，以产品..."},
      { id:3,imgSrc: "./assets/imgs/pic3.jpg", title: "移动端App UI 设计入门与实战", description: "不同于其它只教给你设计技能的课程，本课程将带你从产品的高度实战UI设计，以产品..."},
      { id:4,imgSrc: "./assets/imgs/pic4.jpg", title: "移动端App UI 设计入门与实战", description: "不同于其它只教给你设计技能的课程，本课程将带你从产品的高度实战UI设计，以产品..."}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonPage');
  }

  goTo_search() {
    this.navCtrl.push(SearchPage)
  }

  showToast(content: number,id:number) {
    let tmp: string = ""
    if (content == 1) {
      tmp = "感谢推荐"
    } else if (content==-1) {
      tmp = "我们将尽量避免推荐类似课程"
      this.Json_recommend=this.removeOne(this.Json_recommend,id)
    }else if (content==2){
      tmp="收藏成功"
    }
    let toast = this.toastCtrl.create({
      message: tmp,
      duration: 1000,
      position: 'middle'
    });
    toast.present(toast);
  }
  removeOne(preArray:Array<any>,id:number){
    let tmp:Array<any>=[]
    let j:number=0
    for (let i = 0; i <preArray.length ; i++) {
      if (preArray[i].id==id){
      } else {
        tmp.push(preArray[i])
        j++
      }
    }
    return tmp
  }


}
