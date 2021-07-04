var UUID = require('uuid');
var moment = require('moment');
// import UUID from 'uuid'

const Service = require('egg').Service;
class HelperService extends Service {
    async add({
        word,
        translate
    }) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        const result = await this.app.mysql.insert('words', {
            word: word,
            translate: translate,
            uid: UUID.v1(),
            createDate: moment().format('YYYY-MM-DD HH:mm:ss')
        });
        return result.affectedRows === 1
    }
    async getWord() {

        let duJSON = Ebbinghaus()
        const total = await this.app.mysql.query(`select count(*) from words WHERE createDate > '${duJSON[0].start}' and createDate < '${duJSON[0].end}'
        or ( createDate > '${duJSON[1].start}' and createDate < '${duJSON[1].end}' )
        or ( createDate > '${duJSON[2].start}' and createDate < '${duJSON[2].end}' )
        or ( createDate > '${duJSON[3].start}' and createDate < '${duJSON[3].end}' )
        or ( createDate > '${duJSON[4].start}' and createDate < '${duJSON[4].end}' )
        or ( createDate > '${duJSON[5].start}' and createDate < '${duJSON[5].end}' )
        or ( createDate > '${duJSON[6].start}' and createDate < '${duJSON[6].end}' )
        or ( createDate > '${duJSON[7].start}' and createDate < '${duJSON[7].end}' )
        or ( memory < 20)
        `)
        const result = await this.app.mysql.query(`SELECT * FROM words WHERE createDate > '${duJSON[0].start}' and createDate < '${duJSON[0].end}'
          or ( createDate > '${duJSON[1].start}' and createDate < '${duJSON[1].end}' )
          or ( createDate > '${duJSON[2].start}' and createDate < '${duJSON[2].end}' )
          or ( createDate > '${duJSON[3].start}' and createDate < '${duJSON[3].end}' )
          or ( createDate > '${duJSON[4].start}' and createDate < '${duJSON[4].end}' )
          or ( createDate > '${duJSON[5].start}' and createDate < '${duJSON[5].end}' )
          or ( createDate > '${duJSON[6].start}' and createDate < '${duJSON[6].end}' )
          or ( createDate > '${duJSON[7].start}' and createDate < '${duJSON[7].end}' )
          or ( memory < 20)
        `)

        Ebbinghaus()
        return {
            record: result,
            total: total[0]['count(*)'],
        }
    }
    async checkWord() {
        let uid = this.ctx.request.body.wordId
        const result = await this.app.mysql.query(`update words set memory = memory + 3  where uid = '${uid}'`);
        return result
    }
    async forgetWord() {
        let uid = this.ctx.request.body.wordId
        const result = await this.app.mysql.query(`update words set memory = memory - 1  where uid = '${uid}'`);
        return result
    }
    async updataMemory() {
        const result = await this.app.mysql.query(`update words set memory = memory - 1`);
        return result
    }
}

function Ebbinghaus() {
    let duration = [{
            start: moment().subtract(5, 'm').format('YYYY-MM-DD HH:mm:ss'),
            end: moment().add(5, 'm').format('YYYY-MM-DD HH:mm:ss')
        },
        {
            start: moment().subtract(35, 'm').format('YYYY-MM-DD HH:mm:ss'),
            end: moment().subtract(25, 'm').format('YYYY-MM-DD HH:mm:ss')
        },
        {
            start: moment().subtract(7.12, 'h').format('YYYY-MM-DD HH:mm:ss'),
            end: moment().subtract(6.88, 'h').format('YYYY-MM-DD HH:mm:ss')
        },
        {
            start: moment().subtract(1, 'd').format('YYYY-MM-DD HH:mm:ss'),
            end: moment().subtract(0, 'd').format('YYYY-MM-DD HH:mm:ss')
        },
        {
            start: moment().subtract(2, 'd').format('YYYY-MM-DD HH:mm:ss'),
            end: moment().subtract(1, 'd').format('YYYY-MM-DD HH:mm:ss')
        },
        {
            start: moment().subtract(4, 'd').format('YYYY-MM-DD HH:mm:ss'),
            end: moment().subtract(3, 'd').format('YYYY-MM-DD HH:mm:ss')
        },
        {
            start: moment().subtract(7, 'd').format('YYYY-MM-DD HH:mm:ss'),
            end: moment().subtract(6, 'd').format('YYYY-MM-DD HH:mm:ss')
        },
        {
            start: moment().subtract(15, 'd').format('YYYY-MM-DD HH:mm:ss'),
            end: moment().subtract(14, 'd').format('YYYY-MM-DD HH:mm:ss')
        },
    ]
    return duration

}
module.exports = HelperService;