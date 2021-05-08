import puppeteer from 'puppeteer'
import async from 'async'
import fs from 'fs'
let GlobalConfig = {
    mianUrl:"https://www.biquge.com.cn/book/32135/",
    viewPort:{ width: 1000, height: 1080 }
}
const browser = await puppeteer.launch();
const BrowserUA = await browser.userAgent()
let Title
let StartDate
main()
/**
 * @param {object} item 
 * @returns {number,string,string} 
 */
async function callbacks(item){
    let {url,index,title} = item
    const page = await browser.newPage();
    await Promise.all([
        page.setUserAgent(BrowserUA),
        page.setJavaScriptEnabled(true),
        page.setViewport(GlobalConfig.viewPort),
    ])
    await page.goto(url)
    // await page.pdf({path: `./image/${title}.pdf`});
    console.log(title)
    let content = await page.$eval('#content', ele=>ele.innerText)
    page.close()
    return {index,title,content}
}
/**
 * @param {error} err 发送错误
 * @param {Array} results 返回的成功的所有的集合
 * @returns null
 */
function deno(err,results){
    if(err){return}
    results.sort((a,b)=>a.index - b.index );
    let result = results.map(item=> (item.title + '\n\r' + item.content)).join('\n\r');
    fs.writeFileSync(Title,result)
    console.log('抓取完毕')
    endDate()
    browser.close()
}

/**
 * 主入口
 */
async function main(){
    const page = await browser.newPage();
    StartDate = new Date()
    Promise.all([
        page.setUserAgent(BrowserUA),
        page.setJavaScriptEnabled(true),
        page.setViewport(GlobalConfig.viewPort)
    ])
    await page.goto(GlobalConfig.mianUrl)
    Title = await page.$eval('#info > h1',el=>el.innerText) + ".txt"
    // let DOM = await page.$$('.section-box')
    const list = await page.$$eval("#list > dl > dd > a ", el => {return el.map((item,index)=>{return {url:item.href,title:item.innerText,index:index+1}})});
    async.mapLimit(list,5,callbacks,deno)
}
/**
 * 耗时时间
 */
function endDate(){
    let end = new Date()
    let Val = (end-StartDate)/1000
    if(Val>=60){
        let m = Math.floor(Val/60)
        let s = Math.floor(Val%60) 
        console.log(`耗时${m}分${s}秒`)
    }else{
        console.log(`耗时${Val}秒`)
    }
}
