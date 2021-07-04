module.exports = {
    schedule: {
        cron: '0 3 18 * * ? ', //
        type: 'all', // 指定所有的 worker 都需要执行
    },
    async task(ctx) {
        ctx.service.helperWords.updataMemory()
    },
};