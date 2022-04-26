// 分页
export class Page {
    constructor(...args) {
        this.pageNum = args[0] || 1;
        this.pageSize = args[1] || 10;
        this.count = args[2] || 0;
    }
    pageNum;
    pageSize;
    count;
}