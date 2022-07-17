const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const puppeteer = require('puppeteer');


// Pegar do horário atual
var timestamp1 = new Date().getTime();

// Pegar de uma data específica
var timestamp2 = new Date(2022, 7, 15, 15, 15).getTime();

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.initialize();

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('authenticated', () => {
  console.log('AUTHENTICATED');
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', async (message) => {
  if (message.body === '/bigfone') {
    //get media from url    
    const media = await MessageMedia.fromUrl(
      'https://sccartola.com/audiosbbc/01bigfone.mp3'
    );

    //replying with media
    client.sendMessage(message.from, media, {
      caption: 'bigfone',
    }); 

   /*if (timestamp2 == timestamp1) {
        //get media from url
        
        const media = await MessageMedia.fromUrl(
          'https://sccartola.com/audiosbbc/01bigfone.mp3'
        );
    
        //replying with media
        client.sendMessage(message.from, media, {
          caption: 'bigfone',
        }); */
      
  }
  else if (message.body === 'alobbc') {
    //get media from url
    var random = Math.floor(Math.random() * 5);
    const media = await MessageMedia.fromUrl(
      "https://sccartola.com/audiosbbc/"+random+".mp3"
    
    );

    //replying with media
    client.sendMessage(message.from, media, {
      caption: 'alobbc',
    });
  }

  else if (message.body === '/piada') {
    //get media from url
    const media = await MessageMedia.fromUrl(
      "https://sccartola.com/manager/img/piada.jpg"
    
    );

    //replying with media
    client.sendMessage(message.from, media, {
      caption: 'FlaQuinari é "GIGANTE"!',
    });
  }
});

client.on('message', (message) => {
    if (message.body === '/sccoty') {
      message.reply("🤖 Opa! Alguém me chamou? Digite o que você deseja pelo seguinte menu: \n\n/links \n/tutorial \n/slugs \n/noticia \n/adm \n/piada");
    }
    
    else if(message.body === '/noticia') {
      (async () => {
        const url = ('https://joga10news.com/')
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        const notice = await page.evaluate(() => {
          //execução no browser pegar as postagens
          
          data = document.querySelector('.elementor-post__excerpt').innerHTML;
          rep1 = data.replace("\n\t\t\t<p>" , "");
          rep2 = rep1.replace("</p>\n\t\t" , "");
          return rep2;
        });
        message.reply("🤖 SCCoty informa: \n\n" + notice + "\nFonte: " + url);
        await browser.close();
      })();
      
    }
  
    else if(message.body === '/links') {
      message.reply("Página principal: http://sccartola.com/ \nCalendário e Prêmios: https://sccartola.com/competicoes/sccvip.php \nRANKS: https://sccartola.com/competicoes/ranks.php \nBBC: https://sccartola.com/competicoes/bbc.php \nCopa do mundo: https://sccartola.com/competicoes/copadomundo.php \nSéries: https://sccartola.com/competicoes/series.php \nPentágonos: https://sccartola.com/competicoes/pentagonos.php \nPoupanSCC: https://sccartola.com/competicoes/loginpp.php");
    }

    else if (message.body === '/tutorial') {
      message.reply("Para assistir aos tutoriais acesse https://www.instagram.com/sccartola/ e clique nos destaques.");
    }

    else if (message.body === '/adm') {
      message.reply("Conheça quem manda nessa bagaça! https://sccartola.com/admins.php");
    }

    else if (message.body === '/slugs') {
      message.reply("Qual dos slugs você precisa? \n\n/sgeral \n/slenda \n/selite \n/smestre \n/spro \n/shundred ");
    }

    else if (message.body === '/slugs') {
      message.reply("SCC VIP 2.2=>899880;921510;640721;1596189;8625231;19018535;13914175;28988355;2735093;25291185;13937683;939161;2602346;6845873;13909280;7875574;8129909;2697027;3767147;633038;7875369;13973033;8529351;525128;25351479;377783;12438800;11730950;44862780;13933517;1635597;1691197;2213809;28835224;2103692;17970415;3059809;4216290;17949273;381184;4227002;26310209;690073;2226546;225276;8087533;8012035;8175988;14422122;2777692;14033354;2494253;13918090;798099;13931817;1788440;13938889;44738346;1399171;2161193;7938339;12895514;13908686;734073;28736134;1265843;980011;655661;183598;13943772;587476;14454862;6980938;28637622;7202552;20356689;44509727;44960505;15772994;13970414;7926757;11487008;26232716;13908771;25651479;15821821;69404;13943438;589983;14787092;23893055;4792576;21675573;3346420;1754555;2248874;13923760;172278;45021446;14866453");
    }

    else if (message.body === '/slenda') {
      message.reply("LendaSCC=>13923760;525128;589983;19018535;8625231;12438800;4216290;7875574;2735093;921510;640721;1691197;1596189;69404;899880;4227002;939161;1635597;13914175;381184");
    }

    else if (message.body === '/selite') {
      message.reply("EliteSCC=>8129909;26310209;13973033;3767147;25291185;2494253;8529351;28835224;2226546;7926757;13970414;13908771;11730950;17949273;13937683;25351479;8175988;377783;690073;8012035");
    }

    else if (message.body === '/smestre') {
      message.reply("MestreSCC=>6845873;3346420;587476;2103692;2602346;13933517;44862780;7875369;11487008;3059809;28637622;2248874;23893055;798099;13909280;2697027;1754555;17970415;172278;7202552");
    }

    else if (message.body === '/spro') {
      message.reply("Liga ProSCC=>14033354;2213809;13943438;13918090;8087533;225276;28988355;13938889;45021446;2777692;14422122;4792576;13931817;44738346;21675573;633038;15821821;1788440;25651479;14787092");
    }

    else if (message.body === '/shundred') {
      message.reply("HundredSCC=>1265843;7938339;14454862;20356689;26232716;183598;14866453;13943772;734073;28736134;44509727;12895514;1399171;655661;13908686;6980938;2161193;980011;44960505;15772994");
    }
 
   





    //TESTE Para Usar nos grupos da escola
    else if (message.body === 'Oi') {
        message.reply("Oi! Eu sou o SCCoty, a inteligência artificial do SCC e estou aqui para lhe ajudar! Digite a qualquer momento \n!menu\n e veja minhas opções.");
      }
      
      else if (message.body === 'oi') {
        message.reply("Oi! Eu sou o SCCoty, a inteligência artificial do SCC e estou aqui para lhe ajudar! Digite a qualquer momento \n!menu\n e veja minhas opções.");
      }

      else if (message.body === '!menu') {
        message.reply("!desafio \n!links \n!curiosidade \n!info");
      }

      else if (message.body === '!desafio') {
        message.reply("João tinha uma quantia, gastou 35% e ainda ficou com R$ 97,50. Qual o valor que João tinha inicialmente? \n_Para conferir sua resposta, envie !resposta_");
      }

      else if (message.body === '!resposta') {
        message.reply("João tinha o valor inicial de R$ 150,00.");
      }

      else if (message.body === '!links') {
        message.reply("OBMEP: http://www.obmep.org.br/provas.htm \nProblema de lógica: https://rachacuca.com.br/logica/problemas/teste-de-einstein/ \nSUDOKU: https://sudoku.com/pt");
      }

      else if (message.body === '!curiosidade') {
        message.reply("VOCÊ SABIA? Em 1900, todo o conhecimento matemático do mundo caberia em cerca de 80 livros; hoje, seriam necessários 100 mil livros!");
      }

      else if (message.body === '!info') {
        message.reply("Fui desenvolvido em Javascript pelo professor Deivid. Estou em busca de aperfeiçoamento... Como posso melhorar?");
      }

  });


