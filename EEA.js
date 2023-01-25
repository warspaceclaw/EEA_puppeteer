//EEA - Erros e Acertos - Uma tentativa de apostas - o arquivo sofre alterações com frequência - #5 alteração no projeto original
//warspaceclaw 
//lennaym 
const puppeteer = require('puppeteer');

(async () => {


    let sitelink = 'https://www.flashscore.com/match/hjgttQdQ/#/h2h/overall'//link do h2h
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(sitelink, {
        waitUntil: 'networkidle2',
    });

    //vai pegar os nomes dos times

    const nomeTimes = await page.evaluate(() => {
        const elements = document.getElementsByClassName('participant__participantName participant__overflow ');
        return Array.from(elements).map(element => element.innerText); // as you see, now this function returns array of texts instead of Array of elements
    })

    //vai pegar os ultimos resultados

    const resultados = await page.evaluate(() => {
        const elements = document.getElementsByClassName('h2h__result');
        return Array.from(elements).map(element => element.innerText); // as you see, now this function returns array of texts instead of Array of elements
    })

    //await browser.close();


    //convertendo as array sting para number e criando varias - Equipe A

    {
        //time A
        var nomeTimeA = nomeTimes[0]
        //partida 1
        var resultado_aa = parseInt(resultados[0].substr(0, 1))
        var resultado_ab = parseInt(resultados[0].substr(2, 2))
        //partida 2
        var resultado_ba = parseInt(resultados[1].substr(0, 1))
        var resultado_bb = parseInt(resultados[1].substr(2, 2))
        //partida 3
        var resultado_ca = parseInt(resultados[2].substr(0, 1))
        var resultado_cb = parseInt(resultados[2].substr(2, 2))
        //partida 4
        var resultado_da = parseInt(resultados[3].substr(0, 1))
        var resultado_db = parseInt(resultados[3].substr(2, 2))
        //partida 5
        var resultado_ea = parseInt(resultados[4].substr(0, 1))
        var resultado_eb = parseInt(resultados[4].substr(2, 2))

    }

    //convertendo as array sting para number e criando varias - Equipe B
    {
        var nomeTimeB = nomeTimes[2]
        //partida 1
        var resultado_aaa = parseInt(resultados[5].substr(0, 1))
        var resultado_abb = parseInt(resultados[5].substr(2, 2))
        //partida 2
        var resultado_baa = parseInt(resultados[6].substr(0, 1))
        var resultado_bbb = parseInt(resultados[6].substr(2, 2))
        //partida 3
        var resultado_caa = parseInt(resultados[7].substr(0, 1))
        var resultado_cbb = parseInt(resultados[7].substr(2, 2))
        //partida 4
        var resultado_daa = parseInt(resultados[8].substr(0, 1))
        var resultado_dbb = parseInt(resultados[8].substr(2, 2))
        //partida 5
        var resultado_eaa = parseInt(resultados[9].substr(0, 1))
        var resultado_ebb = parseInt(resultados[9].substr(2, 2))

    }
    //fim robo (das variaveis extraidas do site)]

    //duas variaveis importantes, A e B. (time A e B) e os calculos de média e variância
    {
        {
            let partida1 = resultado_aa + resultado_ab
            let partida2 = resultado_ba + resultado_bb
            let partida3 = resultado_ca + resultado_cb
            let partida4 = resultado_da + resultado_db
            let partida5 = resultado_ea + resultado_eb

            {
                var somaTimeA = (partida1 + partida2 + partida3 + partida4 + partida5) / 5
                var desvioMedioA = ((partida1 - somaTimeA) ^ 2 + (partida2 - somaTimeA) ^ 2 + (partida3 - somaTimeA) ^ 2 + (partida4 - somaTimeA) ^ 2 + (partida5 - somaTimeA) ^ 2) / 5
                console.log(somaTimeA)
            }
        }
        //parte B (time B)
        {
            let partida1 = resultado_aaa + resultado_abb
            let partida2 = resultado_baa + resultado_bbb
            let partida3 = resultado_caa + resultado_cbb
            let partida4 = resultado_daa + resultado_dbb
            let partida5 = resultado_eaa + resultado_ebb

            {
                var somaTimeB = (partida1 + partida2 + partida3 + partida4 + partida5) / 5
                var desvioMedioB = ((partida1 - somaTimeB) ^ 2 + (partida2 - somaTimeB) ^ 2 + (partida3 - somaTimeB) ^ 2 + (partida4 - somaTimeB) ^ 2 + (partida5 - somaTimeB) ^ 2) / 5
                console.log(somaTimeB)
            }

        }
        //fim dos calculos e inicio dos console 

        console.log('variância ' + (desvioMedioA + desvioMedioB) / 2)

        //a chance do resultado do jogo ser menor que a média de gols do time A + Time B é definida pela Diferença da média de gols do Time A - Time B
        {
            //media da SomaTimeA + TimeB
            let mediaAB = (somaTimeA + somaTimeB) / 2
            console.log(mediaAB + ' media no jogo')
            //porcentagem do resultado ser igual a MEDIAAB

            //let resultado = (1 - (somaTimeA - somaTimeB))


            if ((somaTimeA - somaTimeB) < 0) {

                let resultado = (1 + (somaTimeA - somaTimeB))

                console.log('--------------------------')
                console.log('jogo entre ' + nomeTimeA + ' e ' + nomeTimeB)
                console.log((resultado * 100) + ' % de acontecer')
            }
            else {
                resultado = (1 - (somaTimeA - somaTimeB))

                console.log('--------------------------')
                console.log('jogo entre ' + nomeTimeA + ' e ' + nomeTimeB)
                console.log((resultado * 100) + ' % de acontecer')
            }

        }
    }
    await browser.close();
})();
