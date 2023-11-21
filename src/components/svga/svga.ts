import {aComponent} from '@morjs/core';
const {Parser, Player} = require("../../libs/svgaplayer.weapp");

/**
 * TODO: 兼容assets内的svga文件
 */
aComponent({
  options: {
    // 支付宝需要手动开启外部样式类功能
    externalClasses: true,
  },
  didMount() {
    this.onCanvasReady();
  },
  externalClasses: ['svga-class'],
  props: {
    src: {type: String, value: null},
    loops: {type: Number, value: 0},
    // Fill / AspectFill / AspectFit。
    fillMode: {type: String, value: 'AspectFill'},
    onFinished: () => { }
  },
  data: {
    src: String
  },
  methods: {
    load(url: string) {
      return
    },
    //设置动画缩放模式，可选值为 Fill / AspectFill / AspectFit。
    setContentMode(contentMode: string) { },
    startAnimation(reverse: boolean = false) { },
    replaceImage(src: Uint8Array | string, forKey: string) {
      return
    },
    async onCanvasReady() {
      try {
        const parser = new Parser;
        const player = new Player;
        await player.setCanvas('#svgaCanvas')
        console.log('parser.load', this.props.src);
        if (this.props.src) {
          const videoItem = await parser.load(this.props.src);
          console.log('parser.load', videoItem);
          await player.setVideoItem(videoItem);
          player.startAnimation();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
})
