import { Component } from '@angular/core';
import {comu}from'./mock-community'
import { WebUploaderComponent, File, FileStatus, Options, OptionsAccept } from 'ngx-webuploader';
declare const $: any;
@Component({
  templateUrl: 'switches.component.html'
})
export class SwitchesComponent {
  public num:number= 0;
  public commus=comu;
  constructor() { }
  add(){
    this.num=this.num+1;
  };
  imgOptions1: Options = {
    // 自动上传。
    auto: true,
    // 选择文件的按钮。可选。
    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
    pick: '#filePicker1',
    // 只允许选择文件，可选。
    accept: <OptionsAccept>{
      title: 'Images',
      extensions: 'gif,jpg,jpeg,bmp,png',
      mimeTypes: 'image/*'
    }
  };
  onImgReady1(uploader: WebUploaderComponent) {

    let $list1 = $('#fileList1'),
      // 优化retina, 在retina下这个值是2
      ratio = window.devicePixelRatio || 1,

      // 缩略图大小
      thumbnailWidth = 100 * ratio,
      thumbnailHeight = 100 * ratio;

    // 当有文件添加进来的时候
    uploader.Instance.on('fileQueued', function (file) {
      var $li = $(
          '<div id="' + file.id + '" class="file-item thumbnail">' +
          '<img>' +
          '<div class="info">' + file.name + '</div>' +
          '</div>'
        ),
        $img = $li.find('img');

      $list1.append($li);

      // 创建缩略图
      uploader.Instance.makeThumb(file, function (error, src) {
        if (error) {
          $img.replaceWith('<span>不能预览</span>');
          return;
        }

        $img.attr('src', src);
      }, thumbnailWidth, thumbnailHeight);
    });

    // 文件上传过程中创建进度条实时显示。
    uploader.Instance.on('uploadProgress', function (file, percentage) {
      var $li = $('#' + file.id),
        $percent = $li.find('.progress span');

      // 避免重复创建
      if (!$percent.length) {
        $percent = $('<p class="progress"><span></span></p>')
          .appendTo($li)
          .find('span');
      }

      $percent.css('width', percentage * 100 + '%');
    });

    // 文件上传成功，给item添加成功class, 用样式标记上传成功。
    uploader.Instance.on('uploadSuccess', function (file) {
      $('#' + file.id).addClass('upload-state-done');
    });

    // 文件上传失败，现实上传出错。
    uploader.Instance.on('uploadError', function (file) {
      var $li = $('#' + file.id),
        $error = $li.find('div.error');

      // 避免重复创建
      if (!$error.length) {
        $error = $('<div class="error"></div>').appendTo($li);
      }

      // $error.text('上传失败');
    });

    // 完成上传完了，成功或者失败，先删除进度条。
    uploader.Instance.on('uploadComplete', function (file) {
      $('#' + file.id).find('.progress').remove();
    });
  }

  onImgDestroy1() {
    console.log('onDestroy');
  }
}
