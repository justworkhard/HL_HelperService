const Controller = require('egg').Controller;

class HelperWordController extends Controller {
  async add() {
    const {
      ctx
    } = this;
    const {
      word,
      translate
    } = ctx.request.body

    if (!word || !translate) {
      ctx.body = {
        code: 1,
        msg: '请完善参数'
      }
    } else {
      const flag = await ctx.service.helperWords.add({
        word,
        translate
      });
      if (flag) {
        ctx.body = {
          code: 200,
          msg: ''
        }
      } else {
        ctx.body = {
          code: 1,
          msg: '添加失败'
        }
      }
    }
  }
  /**
   * 获取复习点列表
   */
  async getWord() {
    const {
      ctx
    } = this;
    const {
      wordId
    } = ctx.request.body

    let list = await ctx.service.helperWords.getWord()
    ctx.body = {
      code: 200,
      data: list,
      msg: ''
    }
  }
  /**
   * 记得
   */
  async checkWord() {
    const {
      ctx
    } = this;
    0
    const {
      wordId
    } = ctx.request.body

    let list = await ctx.service.helperWords.checkWord()
    ctx.body = {
      code: 200,
      data: '',
      msg: ''
    }
  }
  /**
   * 忘记
   */
  async forgetWord() {
    const {
      ctx
    } = this;

    let list = await ctx.service.helperWords.forgetWord()
    ctx.body = {
      code: 200,
      data: '',
      msg: ''
    }
  }
}

module.exports = HelperWordController;