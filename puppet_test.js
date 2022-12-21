
const puppeteer = require('puppeteer');

(async () => {


    let sitelink = 'https://www.flashscore.com/match/zHX2WQme/#/h2h/overall'

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


    //convertendo as array sting para number e criando varias Equipe A

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

    //convertendo as array sting para number e criando varias Equipe B
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


    // console.log(resultados)

    //fim robo

    {
        //aqui começa o calculado da probabilidade final do código da Equipe A, emitindo na console a %.
        {
            let somaProbabilidadeFinal05
            let somaProbabilidadeFinal15
            let somaProbabilidadeFinal25
            let somaProbabilidadeFinal35
            let somaProbabilidadeFinal45

            function calculoPartida01(resultado01, resultado02) {
                let soma05 = (resultado01 + resultado02)
                let soma15 = soma05
                let soma25 = soma05
                let soma35 = soma05
                let soma45 = soma05

                if (soma05 >= 0.5) {
                    somaProbabilidadeFinal05 = (+ 20)
                }
                else {
                    somaProbabilidadeFinal05 = (+ 0)
                }
                if (soma15 >= 1.5) {
                    somaProbabilidadeFinal15 = (+ 20)
                }
                else {
                    somaProbabilidadeFinal15 = (+ 0)
                }

                if (soma25 >= 2.5) {
                    somaProbabilidadeFinal25 = (+ 20)
                }
                else {
                    somaProbabilidadeFinal25 = (+ 0)
                }

                if (soma35 >= 3.5) {
                    somaProbabilidadeFinal35 = (+ 20)
                }
                else {
                    somaProbabilidadeFinal35 = (+ 0)
                }
                if (soma45 >= 4.5) {
                    somaProbabilidadeFinal45 = (+ 20)
                }
                else {
                    somaProbabilidadeFinal45 = (+ 0)
                }
            }

            function calculoPartida02(resultado03, resultado04) {
                let soma05 = (resultado03 + resultado04)
                let soma15 = soma05
                let soma25 = soma05
                let soma35 = soma05
                let soma45 = soma05

                if (soma05 >= 0.5) {
                    somaProbabilidadeFinal05 = (somaProbabilidadeFinal05 + 20)
                }
                else {
                    somaProbabilidadeFinal05 = (somaProbabilidadeFinal05 + 0)
                }
                if (soma15 >= 1.5) {
                    somaProbabilidadeFinal15 = (somaProbabilidadeFinal15 + 20)
                }
                else {
                    somaProbabilidadeFinal15 = (somaProbabilidadeFinal15 + 0)
                }

                if (soma25 >= 2.5) {
                    somaProbabilidadeFinal25 = (somaProbabilidadeFinal25 + 20)
                }
                else {
                    somaProbabilidadeFinal25 = (somaProbabilidadeFinal25 + 0)
                }

                if (soma35 >= 3.5) {
                    somaProbabilidadeFinal35 = (somaProbabilidadeFinal35 + 20)
                }
                else {
                    somaProbabilidadeFinal35 = (somaProbabilidadeFinal35 + 0)
                }
                if (soma45 >= 4.5) {
                    somaProbabilidadeFinal45 = (somaProbabilidadeFinal45 + 20)
                }
                else {
                    somaProbabilidadeFinal45 = (somaProbabilidadeFinal45 + 0)
                }
            }

            function calculoPartida03(resultado05, resultado06) {
                let soma05 = (resultado05 + resultado06)
                let soma15 = soma05
                let soma25 = soma05
                let soma35 = soma05
                let soma45 = soma05

                if (soma05 >= 0.5) {
                    somaProbabilidadeFinal05 = (somaProbabilidadeFinal05 + 20)
                }
                else {
                    somaProbabilidadeFinal05 = (somaProbabilidadeFinal05 + 0)
                }
                if (soma15 >= 1.5) {
                    somaProbabilidadeFinal15 = (somaProbabilidadeFinal15 + 20)
                }
                else {
                    somaProbabilidadeFinal15 = (somaProbabilidadeFinal15 + 0)
                }

                if (soma25 >= 2.5) {
                    somaProbabilidadeFinal25 = (somaProbabilidadeFinal25 + 20)
                }
                else {
                    somaProbabilidadeFinal25 = (somaProbabilidadeFinal25 + 0)
                }

                if (soma35 >= 3.5) {
                    somaProbabilidadeFinal35 = (somaProbabilidadeFinal35 + 20)
                }
                else {
                    somaProbabilidadeFinal35 = (somaProbabilidadeFinal35 + 0)
                }
                if (soma45 >= 4.5) {
                    somaProbabilidadeFinal45 = (somaProbabilidadeFinal45 + 20)
                }
                else {
                    somaProbabilidadeFinal45 = (somaProbabilidadeFinal45 + 0)
                }
            }

            function calculoPartida04(resultado07, resultado08) {
                let soma05 = (resultado07 + resultado08)
                let soma15 = soma05
                let soma25 = soma05
                let soma35 = soma05
                let soma45 = soma05


                if (soma05 >= 0.5) {
                    somaProbabilidadeFinal05 = (somaProbabilidadeFinal05 + 20)
                }
                else {
                    somaProbabilidadeFinal05 = (somaProbabilidadeFinal05 + 0)
                }
                if (soma15 >= 1.5) {
                    somaProbabilidadeFinal15 = (somaProbabilidadeFinal15 + 20)
                }
                else {
                    somaProbabilidadeFinal15 = (somaProbabilidadeFinal15 + 0)
                }

                if (soma25 >= 2.5) {
                    somaProbabilidadeFinal25 = (somaProbabilidadeFinal25 + 20)
                }
                else {
                    somaProbabilidadeFinal25 = (somaProbabilidadeFinal25 + 0)
                }

                if (soma35 >= 3.5) {
                    somaProbabilidadeFinal35 = (somaProbabilidadeFinal35 + 20)
                }
                else {
                    somaProbabilidadeFinal35 = (somaProbabilidadeFinal35 + 0)
                }
                if (soma45 >= 4.5) {
                    somaProbabilidadeFinal45 = (somaProbabilidadeFinal45 + 20)
                }
                else {
                    somaProbabilidadeFinal45 = (somaProbabilidadeFinal45 + 0)
                }
                return calculoPartida04
            }

            function calculoPartida05(resultado09, resultado10) {
                let soma05 = (resultado09 + resultado10)
                let soma15 = soma05
                let soma25 = soma05
                let soma35 = soma05
                let soma45 = soma05

                if (soma05 >= 0.5) {
                    somaProbabilidadeFinal05 = (somaProbabilidadeFinal05 + 20)
                }
                else {
                    somaProbabilidadeFinal05 = (somaProbabilidadeFinal05 + 0)
                }
                if (soma15 >= 1.5) {
                    somaProbabilidadeFinal15 = (somaProbabilidadeFinal15 + 20)
                }
                else {
                    somaProbabilidadeFinal15 = (somaProbabilidadeFinal15 + 0)
                }

                if (soma25 >= 2.5) {
                    somaProbabilidadeFinal25 = (somaProbabilidadeFinal25 + 20)
                }
                else {
                    somaProbabilidadeFinal25 = (somaProbabilidadeFinal25 + 0)
                }

                if (soma35 >= 3.5) {
                    somaProbabilidadeFinal35 = (somaProbabilidadeFinal35 + 20)
                }
                else {
                    somaProbabilidadeFinal35 = (somaProbabilidadeFinal35 + 0)
                }
                if (soma45 >= 4.5) {
                    somaProbabilidadeFinal45 = (somaProbabilidadeFinal45 + 20)
                }
                else {
                    somaProbabilidadeFinal45 = (somaProbabilidadeFinal45 + 0)
                }
                return calculoPartida05
            }

            calculoPartida01(resultado_aa, resultado_ab)
            calculoPartida02(resultado_ba, resultado_bb)
            calculoPartida03(resultado_ca, resultado_cb)
            calculoPartida04(resultado_da, resultado_db)
            calculoPartida05(resultado_ea, resultado_eb)

            {

                console.log('      ', '0,5 | 1,5 | 2,5 | 3,5 | 4,5')
                console.log(nomeTimeA, somaProbabilidadeFinal05, '| ' + somaProbabilidadeFinal15, ' | ' + somaProbabilidadeFinal25, ' | ' + somaProbabilidadeFinal35, ' | ' + somaProbabilidadeFinal45)

            }
        }

        //console.log('-----------------------------------')
        //aqui começa o calculado da probabilidade final do código da Equipe B, emitindo na console a %.

        {
            let somaProbabilidadeFinal05
            let somaProbabilidadeFinal15
            let somaProbabilidadeFinal25
            let somaProbabilidadeFinal35
            let somaProbabilidadeFinal45

            function calculoPartida01(resultado01, resultado02) {
                let soma05 = (resultado01 + resultado02)
                let soma15 = soma05
                let soma25 = soma05
                let soma35 = soma05
                let soma45 = soma05
                if (soma05 >= 0.5) {
                    somaProbabilidadeFinal05 = (+ 20)
                }
                else {
                    somaProbabilidadeFinal05 = (+ 0)
                }
                if (soma15 >= 1.5) {
                    somaProbabilidadeFinal15 = (+ 20)
                }
                else {
                    somaProbabilidadeFinal15 = (+ 0)
                }

                if (soma25 >= 2.5) {
                    somaProbabilidadeFinal25 = (+ 20)
                }
                else {
                    somaProbabilidadeFinal25 = (+ 0)
                }

                if (soma35 >= 3.5) {
                    somaProbabilidadeFinal35 = (+ 20)
                }
                else {
                    somaProbabilidadeFinal35 = (+ 0)
                }
                if (soma45 >= 4.5) {
                    somaProbabilidadeFinal45 = (+ 20)
                }
                else {
                    somaProbabilidadeFinal45 = (+ 0)
                }
            }

            function calculoPartida02(resultado03, resultado04) {
                let soma05 = (resultado03 + resultado04)
                let soma15 = soma05
                let soma25 = soma05
                let soma35 = soma05
                let soma45 = soma05

                if (soma05 >= 0.5) {
                    somaProbabilidadeFinal05 = (somaProbabilidadeFinal05 + 20)
                }
                else {
                    somaProbabilidadeFinal05 = (somaProbabilidadeFinal05 + 0)
                }
                if (soma15 >= 1.5) {
                    somaProbabilidadeFinal15 = (somaProbabilidadeFinal15 + 20)
                }
                else {
                    somaProbabilidadeFinal15 = (somaProbabilidadeFinal15 + 0)
                }

                if (soma25 >= 2.5) {
                    somaProbabilidadeFinal25 = (somaProbabilidadeFinal25 + 20)
                }
                else {
                    somaProbabilidadeFinal25 = (somaProbabilidadeFinal25 + 0)
                }

                if (soma35 >= 3.5) {
                    somaProbabilidadeFinal35 = (somaProbabilidadeFinal35 + 20)
                }
                else {
                    somaProbabilidadeFinal35 = (somaProbabilidadeFinal35 + 0)
                }
                if (soma45 >= 4.5) {
                    somaProbabilidadeFinal45 = (somaProbabilidadeFinal45 + 20)
                }
                else {
                    somaProbabilidadeFinal45 = (somaProbabilidadeFinal45 + 0)
                }
            }

            function calculoPartida03(resultado05, resultado06) {
                let soma05 = (resultado05 + resultado06)
                let soma15 = soma05
                let soma25 = soma05
                let soma35 = soma05
                let soma45 = soma05

                if (soma05 >= 0.5) {
                    somaProbabilidadeFinal05 = (somaProbabilidadeFinal05 + 20)
                }
                else {
                    somaProbabilidadeFinal05 = (somaProbabilidadeFinal05 + 0)
                }
                if (soma15 >= 1.5) {
                    somaProbabilidadeFinal15 = (somaProbabilidadeFinal15 + 20)
                }
                else {
                    somaProbabilidadeFinal15 = (somaProbabilidadeFinal15 + 0)
                }

                if (soma25 >= 2.5) {
                    somaProbabilidadeFinal25 = (somaProbabilidadeFinal25 + 20)
                }
                else {
                    somaProbabilidadeFinal25 = (somaProbabilidadeFinal25 + 0)
                }

                if (soma35 >= 3.5) {
                    somaProbabilidadeFinal35 = (somaProbabilidadeFinal35 + 20)
                }
                else {
                    somaProbabilidadeFinal35 = (somaProbabilidadeFinal35 + 0)
                }
                if (soma45 >= 4.5) {
                    somaProbabilidadeFinal45 = (somaProbabilidadeFinal45 + 20)
                }
                else {
                    somaProbabilidadeFinal45 = (somaProbabilidadeFinal45 + 0)
                }
            }

            function calculoPartida04(resultado07, resultado08) {
                let soma05 = (resultado07 + resultado08)
                let soma15 = soma05
                let soma25 = soma05
                let soma35 = soma05
                let soma45 = soma05

                if (soma05 >= 0.5) {
                    somaProbabilidadeFinal05 = (somaProbabilidadeFinal05 + 20)
                }
                else {
                    somaProbabilidadeFinal05 = (somaProbabilidadeFinal05 + 0)
                }
                if (soma15 >= 1.5) {
                    somaProbabilidadeFinal15 = (somaProbabilidadeFinal15 + 20)
                }
                else {
                    somaProbabilidadeFinal15 = (somaProbabilidadeFinal15 + 0)
                }

                if (soma25 >= 2.5) {
                    somaProbabilidadeFinal25 = (somaProbabilidadeFinal25 + 20)
                }
                else {
                    somaProbabilidadeFinal25 = (somaProbabilidadeFinal25 + 0)
                }

                if (soma35 >= 3.5) {
                    somaProbabilidadeFinal35 = (somaProbabilidadeFinal35 + 20)
                }
                else {
                    somaProbabilidadeFinal35 = (somaProbabilidadeFinal35 + 0)
                }
                if (soma45 >= 4.5) {
                    somaProbabilidadeFinal45 = (somaProbabilidadeFinal45 + 20)
                }
                else {
                    somaProbabilidadeFinal45 = (somaProbabilidadeFinal45 + 0)
                }
                return calculoPartida04
            }

            function calculoPartida05(resultado09, resultado10) {
                let soma05 = (resultado09 + resultado10)
                let soma15 = soma05
                let soma25 = soma05
                let soma35 = soma05
                let soma45 = soma05

                if (soma05 >= 0.5) {
                    somaProbabilidadeFinal05 = (somaProbabilidadeFinal05 + 20)
                }
                else {
                    somaProbabilidadeFinal05 = (somaProbabilidadeFinal05 + 0)
                }
                if (soma15 >= 1.5) {
                    somaProbabilidadeFinal15 = (somaProbabilidadeFinal15 + 20)
                }
                else {
                    somaProbabilidadeFinal15 = (somaProbabilidadeFinal15 + 0)
                }

                if (soma25 >= 2.5) {
                    somaProbabilidadeFinal25 = (somaProbabilidadeFinal25 + 20)
                }
                else {
                    somaProbabilidadeFinal25 = (somaProbabilidadeFinal25 + 0)
                }

                if (soma35 >= 3.5) {
                    somaProbabilidadeFinal35 = (somaProbabilidadeFinal35 + 20)
                }
                else {
                    somaProbabilidadeFinal35 = (somaProbabilidadeFinal35 + 0)
                }
                if (soma45 >= 4.5) {
                    somaProbabilidadeFinal45 = (somaProbabilidadeFinal45 + 20)
                }
                else {
                    somaProbabilidadeFinal45 = (somaProbabilidadeFinal45 + 0)
                }
                return calculoPartida05
            }

            calculoPartida01(resultado_aaa, resultado_abb)
            calculoPartida02(resultado_baa, resultado_bbb)
            calculoPartida03(resultado_caa, resultado_cbb)
            calculoPartida04(resultado_daa, resultado_dbb)
            calculoPartida05(resultado_eaa, resultado_ebb)

            {
                //console.log('0,5 | 1,5 | 2,5 | 3,5 | 4,5')
                console.log(nomeTimeB, somaProbabilidadeFinal05, '| ' + somaProbabilidadeFinal15, ' | ' + somaProbabilidadeFinal25, ' | ' + somaProbabilidadeFinal35, ' | ' + somaProbabilidadeFinal45)
            }
        }
    }
    await browser.close();
})();


