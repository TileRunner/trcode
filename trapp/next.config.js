module.exports = {
    future: {
        webpack5: true,
    },
    exportPathMap: function () {
        return {
        '/': { page: '/' }
        }
    }
}