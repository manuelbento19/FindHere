const axios = require('axios');
const cheerio = require('cheerio');
const crypto = require('crypto');
async function goToPage(url){
    const results = await axios.get(url);
    return results.data
}



module.exports = {
    async TakePage(produt){
        const page = await goToPage(`https://www.ncrangola.com/loja/particulares/pt/pesquisa?controller=search&orderby=position&orderway=desc&search_query=${produt}&submit_search=')`);
        let $ = await cheerio.load(page);
        
        const info = [{
        id:'',
        imagem:'',
        marca:'',
        desc:'',
        preco:'',
        caminho:''
        }];

        $('.produto').each((i,e)=>{
            info.push({
                id:crypto.randomBytes(4).toString('hex'),
                imagem:$(e).find('.produto_img_in img').attr('src'),
                marca:$(e).find('h6').text(),
                desc:$(e).find('h5').text(),
                preco:$(e).find('span').text(),
                caminho:$(e).find('.produto_img_in a').attr('href'),
            });
        });
        info.shift();
        return info
    }
}